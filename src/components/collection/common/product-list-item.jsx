import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            stock: 'InStock',
            image: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onClickHandle(img) {
        this.setState({ image : img} );
    }

    render() {
        const {product, symbol, onAddToCartClicked} = this.props;
        const {open} = this.state;

        return (
                <div className="col-xl-3 col-md-6 col-grid-box">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <div className="front">
                                <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`} ><img
                                    src={this.state.picture}
                                    className="img-fluid"
                                    alt="" /></Link>
                            </div>
                            <div className="cart-info cart-wrap">
                                <button title="Add to cart" onClick={() => onAddToCartClicked(product)}>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </button>
                                <a href="#" data-toggle="modal"
                                   data-target="#quick-view"
                                   title="Quick View"
                                   onClick={this.onOpenModal}><i className="fa fa-search" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="product-detail">
                            <div>
                                <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                                    <h6>{product.name}</h6>
                                </Link>
                                <p>{product.shortDetails}</p>
                                <h4>{product.price}{symbol}</h4>
                                <ul className="color-variant">
                                    {product.variants.map((vari, i) => {
                                        return (
                                            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content quick-view-modal">
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6  col-xs-12">
                                                <div className="quick-view-img">
                                                    <img src={`${this.state.image?this.state.image:product.variants[0].images}`} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 rtl-text">
                                                <div className="product-right">
                                                    <h2> {product.name} </h2>
                                                    <h3>{product.price}{symbol}</h3>
                                                    <ul className="color-variant">
                                                        {product.variants.map((vari, i) =>
                                                            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                                        }
                                                    </ul>
                                                    <div className="border-product">
                                                        <h6 className="product-title">description</h6>
                                                        <p>{product.shortDetails}</p>
                                                    </div>
                                                    <div className="product-description border-product">
                                                        <div className="size-box">
                                                            <ul>
                                                                {product.size.map((size, i) => {
                                                                    return <li key={i}><a href="#">{size}</a></li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-buttons">
                                                        <button  className="btn btn-solid" onClick={() => onAddToCartClicked(product)} >ajouter au panier</button>
                                                        <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`} className="btn btn-solid">en savoir plus</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Modal>
                </div>
        )
    }
}

export default ProductListItem;