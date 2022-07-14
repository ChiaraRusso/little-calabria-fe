import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';

import APIService from '../service/APIService';


class Pizze extends Component {

    state = {
      /*  pizze: [
            { id: 24, foodDescription: "Tomatoe sauce and mozzarella", foodName: "Pizza Margherita", foodPrice: 4.00, foodImage: margherita, quantity: 0 },
            { id: 25, foodDescription: "Tomatoe sauce, mozzarella and spicy salame", foodName: "Pizza Diavola", foodPrice: 5.50, foodImage: diavola, quantity: 0 },
            { id: 26, foodDescription: "Tomatoe sauce, mozzarella, fries and wurstel sausage", foodName: "Pizza Chiara", foodPrice: 5.50, foodImage: chiara, quantity: 0 },
            { id: 27, foodDescription: "Mozzarella, mortadella and pistachios", foodName: "Pizza Paola", foodPrice: 7.90, foodImage: paola, quantity: 0 },
            { id: 28, foodDescription: "Mozzarella and mashrooms", foodName: "Pizza Mariella", foodPrice: 6.90, foodImage: mariella, quantity: 0 },
            { id: 29, foodDescription: "Mozzarella, tomatoe, rocket salad, raw ham and parmigiano", foodName: "Pizza Primavera", foodPrice: 6.90, foodImage: primavera, quantity: 0 },
            { id: 30, foodDescription: "Mozzarella, tomatoe sauce, black olives, mashrooms, raw ham and artichokes", foodName: "Pizza 4 stagioni", foodPrice: 6.90, foodImage: stagioni, quantity: 0 },
            { id: 31, foodDescription: "Tomatoe sauce, mozzarella, fries", foodName: "Pizza Lauren", foodPrice: 5.90, foodImage: lauren, quantity: 0 },
        ]*/

        pizze : []
    }


    componentDidMount() {
        
        APIService.getPizze().then((data) => {
            this.setState({ pizze: data.data })
        })
            .catch(function (ex) {
                console.log('ERROR ', ex);

            });;
    }

    handleAdd = card => {

        const cart = [...this.state.pizze];
        const id = cart.indexOf(card);
        cart[id].quantity++;
        // cart[id] = { ...card };
        //cart[id].quantity++;
        this.setState({ pizze: cart });

    }

    render() {
        let cart = [];
        for (let i = 0; i < this.state.pizze.length; i++) {
            if (this.state.pizze[i].quantity > 0) {
                cart = [...cart, this.state.pizze[i]];
            }
        }
        return (
            <div style={{ backgroundColor: '#FAF0E6' }}>

                <Navbar currentPage="Pizze" pizze={cart} />
                <h4 style={{ textAlign: 'center' }}>Pizzas</h4>
                <hr />

                <div className='container' >

                    <div className='row'>
                        {this.state.pizze.map(value => (
                            <Card
                                key={value.id}
                                card={value}
                                onAdd={this.handleAdd}
                            />
                        ))}
                    </div>

                </div>
            </div>
        );
    }

}
export default Pizze;