import React, { Component } from "react";

class Card extends Component {

    render() {
        return (
            <div className='col'>
                <div className="card" style={{ width: '18rem', textAlign: 'center', marginBottom: "20px", backgroundColor: '#FDF5E6' }}>
                    <img src={this.props.card.foodImage} style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.foodName}</h5>
                        <p className="card-text">{this.props.card.foodDescription}</p>
                        <p className="card-text">${this.props.card.foodPrice}</p>
                        <button onClick ={() => this.props.onAdd(this.props.card)} className="btn btn-outline-success" >Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;