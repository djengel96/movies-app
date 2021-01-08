import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ShoesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            colors: '',
            image: '',
            price: 0
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputprice = async event => {
        const price = event.target.value
        this.setState({ price })
    }

    handleChangeInputColors = async event => {
        const colors = event.target.value
        this.setState({ colors })
    }

    handleIncludeShoe = async () => {
        const { name, price, colors } = this.state
        const arrayColor = colors.split('/')
        const payload = { name, price, colors: arrayColor }

        await api.insertShoe(payload).then(res => {
            window.alert(`Shoe inserted successfully`)
            this.setState({
                name: '',
                colors: '',
                image: '',
                price: 0
            })
        })
    }

    render() {
        const { name, price, colors } = this.state
        return (
            <Wrapper>
                <Title>Create Shoe</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Price: </Label>
                <InputText
                    type="number"
                    // step="0.1"
                    // lang="en-US"
                    // min="0"
                    // max="10"
                    // pattern="[0-9]+([,\.][0-9]+)?"
                    value={price}
                    onChange={this.handleChangeInputprice}
                />

                <Label>Colors: </Label>
                <InputText
                    type="text"
                    value={colors}
                    onChange={this.handleChangeInputColors}
                />

                <Button onClick={this.handleIncludeShoe}>Add Shoe</Button>
                <CancelButton href={'/shoes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ShoesInsert
