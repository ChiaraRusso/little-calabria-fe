import React, { Component } from 'react';

import Navbar from './Navbar';
import Card from './Card';

import melanzana from '../images/secondi/melanzane-ripiene.png';
import patateMP from '../images/secondi/patate-mpacchiuse.png';
import patatePi from '../images/secondi/patate-pipi.png';
import polpette from '../images/secondi/polpette.png';
import parmigiana from '../images/secondi/parmigiana.png';
import baccala from '../images/secondi/baccala.png';
import gateau from '../images/secondi/gateau.png';
import braciole from '../images/secondi/braciole.png';

class Secondi extends Component {

    state = {
        secondi: [
            { id: 16, foodDescription: "Stuffed eggplants", foodName: "Melanzane Ripiene", foodPrice: 5.00, foodImage: melanzana, quantity: 0 },
            { id: 17, foodDescription: "Potatoes seasoned with Tropea onions", foodName: "Patate Mplacchiuse", foodPrice: 4.50, foodImage: patateMP, quantity: 0 },
            { id: 18, foodDescription: "Potatoes cookes with peppers", foodName: "Patate e peperoni", foodPrice: 3.50, foodImage: patatePi, quantity: 0 },
            { id: 19, foodDescription: "Meatballs", foodName: "Polpette alla calabrese", foodPrice: 5.90, foodImage: polpette, quantity: 0 },
            { id: 20, foodDescription: "Eggplant Parmesan", foodName: "Parmigiana di melanzane", foodPrice: 6.90, foodImage: parmigiana, quantity: 0 },
            { id: 21, foodDescription: "Cod fish cooked with potatoes and peppers in the oven", foodName: "Baccala alla cosentina", foodPrice: 6.90, foodImage: baccala, quantity: 0 },
            { id: 22, foodDescription: "Potatoe gateau", foodName: "Gateau di patate", foodPrice: 4.90, foodImage: gateau, quantity: 0 },
            { id: 23, foodDescription: "Beef chop filled", foodName: "Braciole ripiene", foodPrice: 4.90, foodImage: braciole, quantity: 0 },
        ]
    }

    handleAdd = card => {

        const cart = [...this.state.secondi];
        const id = cart.indexOf(card);
        cart[id].quantity++;
        // cart[id] = { ...card };
        //cart[id].quantity++;
        this.setState({ secondi: cart });

    }

    render() {
        let cart = [];
        for (let i = 0; i < this.state.secondi.length; i++) {
            if (this.state.secondi[i].quantity > 0) {
                cart = [...cart, this.state.secondi[i]];
            }
        }
        return (
            <div style={{ backgroundColor: '#FAF0E6' }}>

                <Navbar currentPage="Secondi" secondi={cart} />
                <h4 style={{ textAlign: 'center' }}>Second courses</h4>

                <hr />

                <div className='container'>
                    <div className='row'>

                        {this.state.secondi.map(value => (
                            <Card
                                key={value.id}
                                card={value}
                                onAdd={this.handleAdd}
                            />
                        ))}
                    </div>

                </div>
            </div >
        );
    }

}
export default Secondi;