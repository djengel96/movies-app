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

class ShoesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleChangeInputImage = async event => {
        const image = event.target.value
        this.setState({ image })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price

        this.setState({ price })
    }

    handleChangeInputColors = async event => {
        const colors = event.target.value
        this.setState({ colors })
    }

    handleUpdateShoe = async () => {
        const { id, name, image, colors, price } = this.state
        const arrayColor = colors.split('/')
        const payload = { name, image, colors: arrayColor, price }

        await api.updateShoeById(id, payload).then(res => {
            window.alert(`Shoe updated successfully`)
            this.setState({
                name: '',
                image: '',
                colors: '',
                price: 0
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const shoe = await api.getShoeById(id)

        this.setState({
            name: shoe.data.data.name,
            image: shoe.data.data.image,
            colors: shoe.data.data.colors.join('/'),
            price: shoe.data.data.price
        })
    }

    render() {
        const { name, image, colors, price } = this.state
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
                    onChange={this.handleChangeInputPrice}
                />
                
                <Label>Colors: </Label>
                <InputText
                    type="text"
                    value={colors}
                    onChange={this.handleChangeInputColors}
                />
                
                <Label>Image: </Label>
                <InputText
                    type="text"
                    value={image}
                    onChange={this.handleChangeInputImage}
                />
                
                `<Button onClick={this.handleUpdateShoe}>Update Shoe</Button>
                <CancelButton href={'/shoes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ShoesUpdate
