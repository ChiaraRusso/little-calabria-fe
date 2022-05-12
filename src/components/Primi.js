import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';

import linguineP from '../images/primi/linguineP.png';
import maccheroniNd from '../images/primi/maccheroniNd.png';
import laghene from '../images/primi/laghene.png';
import gnocchi from '../images/primi/gnocchi.png';
import lasagna from '../images/primi/lasagna.png';
import conchiglioni from '../images/primi/conchiglioni.jpeg';
import spaghettiS from '../images/primi/spaghettiS.png';
import tortellini from '../images/primi/tortellini.png';

class Primi extends Component {
    state = {
        primi: [
            { id: 8, foodDescription: "Conchiglioni pasta filled with ragu' and tomatoe sausace", foodName: "Conchiglioni ripieni", foodPrice: 6.90, foodImage: conchiglioni, quantity: 0 },
            { id: 9, foodDescription: "Linguine pasta with dried tomatoes", foodName: "Linguine ai pomodori secchi", foodPrice: 5.50, foodImage: linguineP, quantity: 0 },
            { id: 10, foodDescription: "Lagane (type of rustic fresh pasta) with chickpea", foodName: "Laghene e ceci", foodPrice: 5.50, foodImage: laghene, quantity: 0 },
            { id: 11, foodDescription: "Gnocchi pasta with tomatoe sauce and mozzarella cheese", foodName: "Gnocchi alla sorrentina", foodPrice: 5.90, foodImage: gnocchi, quantity: 0 },
            { id: 12, foodDescription: "Classic italian lasagna", foodName: "Lasagna Bolognese", foodPrice: 6.90, foodImage: lasagna, quantity: 0 },
            { id: 13, foodDescription: "Maccheroni al ferretto pasta seasoned with 'nduja and ricotta cheese", foodName: "Maccheroni al ferretto 'nduja e ricotta", foodPrice: 6.00, foodImage: maccheroniNd, quantity: 0 },
            { id: 14, foodDescription: "Spaghetti pasta seasoned with seafood", foodName: "Spaghetti allo scoglio", foodPrice: 7.00, foodImage: spaghettiS, quantity: 0 },
            { id: 15, foodDescription: "Tortellini pasta in broth", foodName: "Tortellini in brodo", foodPrice: 5.00, foodImage: tortellini, quantity: 0 },
        ]
    }



    handleAdd = card => {

        const cart = [...this.state.primi];
        const id = cart.indexOf(card);
        cart[id].quantity++;
        // cart[id] = { ...card };
        //cart[id].quantity++;
        this.setState({ primi: cart });

    }


    render() {
        let cart = [];
        for (let i = 0; i < this.state.primi.length; i++) {
            if (this.state.primi[i].quantity > 0) {
                cart = [...cart, this.state.primi[i]];
            }
        }
        return (
            <div style={{ backgroundColor: '#FAF0E6' }}>

                <Navbar currentPage="Primi" primi={cart} />
                <h4 style={{ textAlign: 'center' }}>First courses</h4>

                <hr />

                <div className='container' >
                    <div className='row'>
                        {this.state.primi.map(value => (
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
export default Primi;