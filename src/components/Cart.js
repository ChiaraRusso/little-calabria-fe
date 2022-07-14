import React, { Component } from "react";

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Tooltip } from "@material-ui/core";

import Modal from '@mui/material/Modal';

import Paper from '@mui/material/Paper';

import './../style/Cart.css';


class Cart extends Component {

    constructor(props) {
        super(props);

        //  this.state = { isModalOpen: false, cart : [] }

        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            isModalOpen: false
        }

        this.handleModal = this.handleModal.bind(this)
    }

    //N.B. le callback sono to share data da Child to Parent

    componentDidMount() {
        var cart = JSON.parse(localStorage.getItem('cart'));
        if (cart === null) {
            this.setState({
                cart
            });
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
        }
        else {
            this.setState({
                cart
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {

            var cartFinal = [...this.state.cart];


            if (this.props.antipasti && this.props.antipasti.length > 0) {
                var antipasti = [];
                var trovato = false;
                for (let j = 0; j < cartFinal.length; j++) {
                    if (this.props.antipasti[0].foodImage === cartFinal[j].foodImage) {
                        trovato = true;
                        cartFinal[j].quantity++;
                    }
                }
                if (!trovato) {
                    antipasti.push(this.props.antipasti[0]);
                }
                cartFinal = cartFinal.concat(antipasti);
            }

            if (this.props.primi && this.props.primi.length > 0) {
                var primi = [];
                var trovato1 = false;
                for (let j = 0; j < cartFinal.length; j++) {
                    if (this.props.primi[0].foodImage === cartFinal[j].foodImage) {
                        trovato1 = true;
                        cartFinal[j].quantity++;
                    }
                }
                if (!trovato1) {
                    primi.push(this.props.primi[0]);
                }
                cartFinal = cartFinal.concat(primi);
            }


            if (this.props.secondi && this.props.secondi.length > 0) {
                var secondi = [];
                var trovato2 = false;
                for (let j = 0; j < cartFinal.length; j++) {
                    if (this.props.secondi[0].foodImage === cartFinal[j].foodImage) {
                        trovato2 = true;
                        cartFinal[j].quantity++;
                    }
                }
                if (!trovato2) {
                    secondi.push(this.props.secondi[0]);
                }
                cartFinal = cartFinal.concat(secondi);
            }

            if (this.props.pizze && this.props.pizze.length > 0) {
                var pizze = [];
                var trovato3 = false;
                for (let j = 0; j < cartFinal.length; j++) {
                    if (this.props.pizze[0].foodImage === cartFinal[j].foodImage) {
                        trovato3 = true;
                        cartFinal[j].quantity++;
                    }
                }
                if (!trovato3) {
                    pizze.push(this.props.pizze[0]);
                }
                cartFinal = cartFinal.concat(pizze);
            }

            if (this.props.dolci && this.props.dolci.length > 0) {
                var dolci = [];
                var trovato4 = false;
                for (let j = 0; j < cartFinal.length; j++) {
                    if (this.props.dolci[0].foodImage === cartFinal[j].foodImage) {
                        trovato4 = true;
                        cartFinal[j].quantity++;
                    }
                }
                if (!trovato4) {
                    dolci.push(this.props.dolci[0]);
                }
                cartFinal = cartFinal.concat(dolci);
            }


            this.setState({ cart: cartFinal }, () => {
                localStorage.setItem('cart', JSON.stringify(this.state.cart))
            })
        }

    }


    handleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    removeItem(item) {
        var tmp = [...this.state.cart];

        var index = tmp.indexOf(item);
        if (index > -1) {
            if (tmp[index].quantity > 1) {
                tmp[index].quantity--;
            } else {
                tmp.splice(index, 1);
            }
        }
        // this.setState({cart : tmp});
        this.setState({ cart: tmp }, () => {
            localStorage.setItem('cart', JSON.stringify(this.state.cart))
        })
    }

    addItem(item) {
        var tmp = [...this.state.cart];

        var index = tmp.indexOf(item);
        if (index > -1) {
            tmp[index].quantity++;
        }
        // this.setState({cart : tmp});
        this.setState({ cart: tmp }, () => {
            localStorage.setItem('cart', JSON.stringify(this.state.cart))
        })
    }



    render() {

        var total = 0;
        if (this.state.cart[0] !== undefined && this.state.cart.length > 0) {
            for (let i = 0; i < this.state.cart.length; i++) {
                if (this.state.cart[i].quantity > 0) {
                    total = total + (this.state.cart[i].foodPrice * this.state.cart[i].quantity);
                } else {
                    total += this.state.cart[i].foodPrice;
                }
            }
        }
        total = Math.round(total * 100) / 100;

        return (
            <>
                <div style={{ backgroundColor: '#FAF0E6' }}>

                    <hr />

                    <div style={{ position: 'absolute', top: 25, right: 15 }}>
                        <Badge color="secondary" overlap="rectangular"
                            badgeContent={this.state.cart.length} >
                            <ShoppingCartIcon onClick={this.handleModal} />
                        </Badge>
                    </div>


                    <Modal
                        open={this.state.isModalOpen}
                        onClose={this.handleModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        style={{ overflow: 'scroll' }}>

                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 900, flexGrow: 1 }} >


                            <div className="container padding-bottom-3x mb-1">

                                <div className="table-responsive shopping-cart">
                                    { this.state.cart.length > 0 && this.state.cart[0] !== undefined ?
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Add/Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.cart.map(value => (
                                                    <tr key={value.id}>
                                                        <td>
                                                            <div className="product-item">
                                                                <div className="product-thumb" >
                                                                    <img src={`${process.env.PUBLIC_URL}/images/${value.foodImage}`} alt="Product" style={{
                                                                        margin: 'auto',
                                                                        display: 'block',
                                                                        maxWidth: '100%',
                                                                        maxHeight: '100%'
                                                                    }} />
                                                                </div>
                                                                <div className="product-info">
                                                                    <h4 className="product-title">
                                                                        {value.foodName}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="count-input">
                                                                {value.quantity}
                                                            </div>
                                                        </td>
                                                        <td className="text-center text-lg text-medium">${value.foodPrice}</td>
                                                        <td className="text-center">
                                                            <Tooltip title="Add">
                                                                <AddIcon onClick={() => this.addItem(value)} style={{ cursor: 'pointer' }} />
                                                            </Tooltip>

                                                            <Tooltip title="Remove">
                                                                <RemoveIcon onClick={() => this.removeItem(value)} style={{ cursor: 'pointer', paddingLeft: 7 }} />
                                                            </Tooltip>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                        :
                                        <h4 style={{ textAlign: 'center' }}>Your cart is empty</h4>
                                    }
                                </div>
                                <div className="shopping-cart-footer">

                                    <div className="column text-lg">Subtotal: <span className="text-medium">${total}</span></div>
                                </div>
                            </div>




                            {/*   <div className="container">

                                <div className="row">
                                    <div className="col">
                                        Dish
                                    </div>
                                    <div className="col">
                                        Quantity
                                    </div>
                                    <div className="col">
                                        Price
                                    </div>
                                    <div className="col" />
                                </div>


                                {this.state.cart.map(value => (

                                    <div className='row' key={value.id}>
                                        <div className="col">
                                            {value.foodName}
                                        </div>

                                        <div className='row'>

                                            <div className="col">

                                                <img alt="complex" src={value.foodImage} style={{
                                                    margin: 'auto',
                                                    display: 'block',
                                                    maxWidth: '100%',
                                                    maxHeight: '100%'
                                                }} />

                                            </div>

                                            <div className="col"> {value.quantity} </div>
                                            <div className="col"> ${value.foodPrice} </div>
                                            <div className="col">
                                                <RemoveIcon onClick={() => this.removeItem(value)} />
                                                <AddIcon onClick={() => this.addItem(value)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                            </div>*/}
                        </Paper>
                    </Modal>
                </div>
            </>
        );
    }
}

export default Cart;