import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <ol className="breadcrumb">
                <Link to={"/"} className="breadcrumb-item"><a href="/#">Home</a></Link>
                <li className="breadcrumb-item active" aria-current="page">{this.props.currentPage}</li>
            </ol>
        );
    }
}
export default Breadcrumbs;