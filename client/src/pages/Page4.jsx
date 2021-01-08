
//Copy of ShoesList

import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import Display from '../components/Display'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateShoe extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/shoes/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteShoe extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the shoe ${this.props.id} permanently?`,
            )
        ) {
            api.deleteShoeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class Page4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllShoes().then(shoes => {
            this.setState({
                shoes: shoes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
       //return('This page is working now') 
        const { shoes, isLoading } = this.state

        // {
        //     Header: 'ID',
        //     accessor: '_id',
        //     filterable: true,
        // },

        const columns = [
            
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Colors',
                accessor: 'colors',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Image',
                accessor: 'image',
            },
            {
                Header: 'Price',
                accessor: 'price'
            },
            // {
            //     Header: '',
            //     accessor: '',
            //     Cell: function(props) {
            //         return (
            //             <span>
            //                 <DeleteShoe id={props.original._id} />
            //             </span>
            //         )
            //     },
            // },
            // {
            //     Header: '',
            //     accessor: '',
            //     Cell: function(props) {
            //         return (
            //             <span>
            //                 <UpdateShoe id={props.original._id} />
            //             </span>
            //         )
            //     },
            // },
        ]

        let showTable = true
        if (!shoes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {/* {showTable && (
                    <ReactTable
                        data={shoes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )} */}
                <Display />
            </Wrapper>
        )
    }
}

export default Page4