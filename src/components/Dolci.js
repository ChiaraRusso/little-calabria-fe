import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';

import APIService from '../service/APIService';

class Dolci extends Component {

    state = {
       /* dolci: [
            { id: 32, foodDescription: "", foodName: "Fichi secchi", foodPrice: 3.00, foodImage: fichi, quantity: 0 },
            { id: 33, foodDescription: "", foodName: "Nacatole", foodPrice: 5.50, foodImage: nacatole, quantity: 0 },
            { id: 34, foodDescription: "", foodName: "Zeppole di S. Giuseppe", foodPrice: 5.50, foodImage: zeppole, quantity: 0 },
            { id: 35, foodDescription: "", foodName: "Tiramisu", foodPrice: 4.90, foodImage: tiramisu, quantity: 0 },
            { id: 36, foodDescription: "", foodName: "Tartufo di Pizzo", foodPrice: 6.90, foodImage: tartufo, quantity: 0 },
            { id: 37, foodDescription: "", foodName: "Cannoli siciliani", foodPrice: 4.90, foodImage: cannoli, quantity: 0 },
            { id: 38, foodDescription: "", foodName: "Bocconotti ripieni", foodPrice: 3.90, foodImage: bocconotti, quantity: 0 },
            { id: 39, foodDescription: "", foodName: "Cantucci", foodPrice: 2.90, foodImage: cantucci, quantity: 0 },
        ]*/

        dolci: []
    }

    componentDidMount() {

        APIService.getDesserts().then((data) => {
            this.setState({ dolci: data.data })

        })
            .catch(function (ex) {
                console.log('ERROR ', ex);

            });;
    }

    handleAdd = card => {

        const cart = [...this.state.dolci];
        const id = cart.indexOf(card);
        cart[id].quantity++;
        // cart[id] = { ...card };
        //cart[id].quantity++;
        this.setState({ dolci: cart });

    }

    render() {
        let cart = [];
        for (let i = 0; i < this.state.dolci.length; i++) {
            if (this.state.dolci[i].quantity > 0) {
                cart = [...cart, this.state.dolci[i]];
            }
        }
        return (
            <div style={{ backgroundColor: '#FAF0E6' }}>

                <Navbar currentPage="Dolci" dolci={cart} />
                <h4 style={{ textAlign: 'center' }}>Desserts</h4>

                <hr />

                <div className='container' >
                    <div className='row'>
                        {this.state.dolci.map(value => (
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
export default Dolci;