import React, { Component } from "react";
import logo from '../images/logo2.png';
import { Link } from 'react-router-dom';

import Cart from "./Cart";

class Navbar extends Component {

    /*   constructor(props) {
          super(props);
  
          // this.sendData = this.sendData(this);
  
         // salvo gli lementi nel carrello usando il local storage
         this.state = {
              cart: JSON.parse(localStorage.getItem('cart')) || []
            }
      }*/

    /*  componentDidUpdate(prevProps) {
          if (prevProps !== this.props) {
              const cartTmp = []
                  .concat(
                      this.state.cart,
                      this.props.antipasti ? this.props.antipasti : null,
                      this.props.primi ? this.props.primi : null,
                      this.props.secondi ? this.props.secondi : null,
                      this.props.pizze ? this.props.pizze : null,
                      this.props.dolci ? this.props.dolci : null)
  
                  .filter((item, i, arr) => item && arr.indexOf(item) === i);
              this.setState({ cart: cartTmp }, () => {
                  localStorage.setItem('cart', JSON.stringify(this.state.cart))
              })
          }
  
      }*/


    render() {



        return (
            <>


                {this.props.currentPage !== "Home" ?
                    <nav className="navbar navbar-light" style={{ backgroundColor: "#FAF0E6" }}>

                        <div>
                            <Link to="/" >
                                <img src={logo} className="img-fluid" style={{ maxWidth: '25%' }} alt="..."></img>
                            </Link>
                            <Cart
                                antipasti={this.props.antipasti}
                                primi={this.props.primi}
                                secondi={this.props.secondi}
                                pizze={this.props.pizze}
                                dolci={this.props.dolci}
                            ></Cart>
                        </div>

                    </nav>
                    : <Cart
                        antipasti={this.props.antipasti}
                        primi={this.props.primi}
                        secondi={this.props.secondi}
                        pizze={this.props.pizze}
                        dolci={this.props.dolci}
                    ></Cart>
                }
            </>
        );
    }
}
export default Navbar;