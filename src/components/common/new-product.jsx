import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {getBestSeller} from "../../services";


class NewProduct extends Component {
    render (){
        const {items, symbol} = this.props;

        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, 5));
        }

        return (
            <div className="theme-card">
                <h5 className="title-border">Autres articles</h5>
                <Slider className="offer-slider slide-1">
                    {arrays.map((products, index) =>
                        <div key={index}>
                            {products.map((product, i) =>
                                <div className="media" key={i}>
                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}><img className="img-fluid" src={`${product.variants[0].images}`} alt="" /></Link>
                                    <div className="media-body align-self-center">
                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}><h6>{product.name}</h6></Link>
                                        <h4>{product.price}{symbol}</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: getBestSeller(state.data.products),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, null)(NewProduct);
