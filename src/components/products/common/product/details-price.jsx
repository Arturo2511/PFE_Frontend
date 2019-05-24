import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';


class DetailsWithPrice extends Component {

    constructor (props) {
        super (props)
        this.state = {
            open:false,
            stock: 'InStock',
            nav3: null
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.setState({
            nav3: this.slider3
        });
    }

    render (){
        const {symbol, item, addToCartClicked, BuynowClicked} = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div className="col-lg-6 rtl-text">
                <div className="product-right">
                    <h2> {item.name} </h2>
                    <h3>{item.price}{symbol}</h3>
                    <h4>Vendu par : {item.pseudo} </h4>
                    <div className="product-buttons" >
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item)}>ajouter au panier</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default DetailsWithPrice;