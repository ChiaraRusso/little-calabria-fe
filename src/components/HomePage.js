import React, { Component } from "react";
import logo from '../images/logo2.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import Carousel from 'react-bootstrap/Carousel';

import antip from '../images/antipHome.png';
import primi from '../images/primiHome.png';
import secondi from '../images/secondiHome.png';
import pizze from '../images/pizzeHome.png';
import dolci from '../images/dolciHome.png';

class Home extends Component {
    render() {
        return (
            <>
                <div style={{ textAlign: 'center', backgroundColor: '#FAF0E6'}}>
                    <Navbar currentPage="Home"/>
                    <Link to="/">
                        <img src={logo} className="img-fluid" style={{ maxWidth: "50%" }} alt="..."></img>
                    </Link>

                    <hr />


                    <div style={{ display: 'block', width: '100%', height: 'auto', padding: 30 }}>
                        <h5> Welcome to Little Calabria. We are an Italian restaurant which main focus is Calabria typical dishes. </h5>
                        <hr />
                        <Carousel>

                            <Carousel.Item interval={3000} >
                                <Link to={"/Antipasti"}>
                                    <img className="d-block w-100" src={antip} alt="..." />
                                    <Carousel.Caption>
                                        <h3>Appetizers</h3>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>


                            <Carousel.Item interval={3000}>
                                <Link to={"/Primi"}>
                                    <img className="d-block w-100" src={primi} alt="..." />
                                    <Carousel.Caption>
                                        <h3>First courses</h3>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>



                            <Carousel.Item interval={3000}>
                                <Link to={"/Secondi"}>
                                    <img className="d-block w-100" src={secondi} alt="..." />
                                    <Carousel.Caption>
                                        <h3>Second courses</h3>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>



                            <Carousel.Item interval={3000}>
                                <Link to={"/Pizze"}>
                                    <img className="d-block w-100" src={pizze} alt="..." />
                                    <Carousel.Caption>
                                        <h3>Pizzas</h3>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>



                            <Carousel.Item interval={3000}>
                                <Link to={"/Dolci"}>
                                    <img className="d-block w-100" src={dolci} alt="..." />
                                    <Carousel.Caption>
                                        <h3>Desserts</h3>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>


                        </Carousel>
                    </div>

                </div >
            </>
        );
    }
}
export default Home;
