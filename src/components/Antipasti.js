import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';

import bruschettaP from '../images/antipasti/bruschettaP.jpeg';
import casereccio from '../images/antipasti/casereccio.png';
import casereccio2 from '../images/antipasti/casereccio2.jpeg';
import casereccio3 from '../images/antipasti/casereccio3.jpeg';
import frittelleZ from '../images/antipasti/frittelleZ.jpeg';
import paneNd from '../images/antipasti/paneNd.jpeg';
import taralli from '../images/antipasti/taralli.png';
import tramezzini from '../images/antipasti/tramezzini.png';

class Antipasti extends Component {
    state = {
        antipasti: [
            { id: 0, foodDescription: "Mix of Pecorino cheese, bread with 'nduja, calabrian sopressata", foodName: "Antipasto casereccio", foodPrice: 3.50, foodImage: casereccio3, quantity: 0 },
            { id: 1, foodDescription: "Mix of Italian capocollo, bresaola, spicy salame and mozzarella", foodName: "Antipasto Casereccio", foodPrice: 5.50, foodImage: casereccio2, quantity: 0 },
            { id: 2, foodDescription: "Mix of Italian salame, capocollo, prosciutto crudo, ricotta", foodName: "Antipasto Casereccio", foodPrice: 6.00, foodImage: casereccio, quantity: 0 },
            { id: 3, foodDescription: "Zucchini in batter and fried", foodName: "Frittelle di Zucchine", foodPrice: 2.90, foodImage: frittelleZ, quantity: 0 },
            { id: 4, foodDescription: "Slice of bread with 'nduja", foodName: "Pane con 'nduja", foodPrice: 1.90, foodImage: paneNd, quantity: 0 },
            { id: 5, foodDescription: "Toasted bread with tomatoes", foodName: "Bruschetta con pomodorini", foodPrice: 2.90, foodImage: bruschettaP, quantity: 0 },
            { id: 6, foodDescription: "Taralli and olives", foodName: "Taralli e olive", foodPrice: 1.90, foodImage: taralli, quantity: 0 },
            { id: 7, foodDescription: "Italian ham sandwiches", foodName: "Tramezzini al prosciutto", foodPrice: 1.90, foodImage: tramezzini, quantity: 0 },
        ]
    }

    handleAdd = card => {

        const cart = [...this.state.antipasti];
        const id = cart.indexOf(card);
        cart[id].quantity++;
        // cart[id] = { ...card };
        //cart[id].quantity++;
        this.setState({ antipasti: cart });

    }

    render() {
        let cart = [];
        for (let i = 0; i < this.state.antipasti.length; i++) {
            if (this.state.antipasti[i].quantity > 0) {
                cart = [...cart, this.state.antipasti[i]];
            }
        }
        return (
            <div style={{ backgroundColor: '#FAF0E6' }}>

                <Navbar currentPage="Antipasti" antipasti={cart} />
                <h4 style={{ textAlign: 'center' }}>Appetizers</h4>
                <hr />

                <div className='container' >

                    <div className='row'>
                        {this.state.antipasti.map(value => (

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
export default Antipasti;