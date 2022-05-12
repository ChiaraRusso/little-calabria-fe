import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {

   /*} state = {
        cartItems: [
            { id: 0, foodDescription: "", foodName: "Fichi secchi", foodPrice: 3.00, foodImage: fichi },
            { id: 1, foodDescription: "", foodName: "Nacatole", foodPrice: 5.50, foodImage: nacatole },
        ]
    }

    handleDelete = (id) => {
        // con la funzione filter io sto prendendo solo gli item che hanno l'id diverso da quello passato alla funzione
        const updatedItems = this.state.cartItems.filter(item => item.id !== id);


        // nel caso in cui cartItems e updatedItems avessero avuto lo stesso nome, bastava scrivere  this.setState({ cartItems })

        // N.B. la funszione setState oltre a modificare lo stato, si occupa anche di avvertire React, che deve aggiornare i componenti sulla pagina web. Infatti React,
        // ad ogni modifica dello state, esegue nuovamente la funzione di render() 
        this.setState({ cartItems: updatedItems });
    }

    handleAdd = (newItem) => {
        const newCart = [...this.state.cartItems,
        { id: newItem.id, foodDescription: newItem.foodDescription, foodName: newItem.foodName, foodPrice: newItem.foodPrice, foodImage: newItem.foodImage }]

        this.setState({ cartItems: newCart })
    }*/


    render() {
        console.log('jjjj '+this.props.cart.lenght)
        return (
            <>
            
                <Link to="/Cart">
                Cart<span className="badge badge-light">{this.props.cart.lenght}</span>
                </Link>
                   {/*} <button type="button" className="btn btn-outline-success">*/}
                       {/* <img src={cart} style={{ width: "45px", height: "40px", position: "relative" }} alt="..." />*/}
                       

                        {/*<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {this.props.cart.lenght}
        </span>*/}
                  {/*}  </button>*/}
               
            </>
        );
    }
}
export default Navbar;