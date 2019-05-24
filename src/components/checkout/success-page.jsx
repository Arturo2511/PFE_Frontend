import React, {Component} from 'react';


class orderSuccess extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        const {payment, items, symbol, orderTotal} = this.props.location.state;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var current = new Date();
        let CheckDate = current.toLocaleDateString("fr-FR", options).toString()

        return (
            (payment)?
            <div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-text">
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    <h2>merci</h2>
                                    <p>votre paiement a été reçu avec succès</p>
                                    <p>ID de la transaction: {(payment.paymentID)?payment.paymentID:payment.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-order">
                                    <h3>détail de votre commande</h3>
                                    {items.map((item, index) => {
                                    return <div className="row product-order-detail" key={index}>
                                                <div className="col-3">
                                                    <img src={`${item.picture}`} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>produit</h4>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>prix</h4>
                                                        <h5>{item.price}{symbol}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>sous-total <span>{orderTotal}{symbol}</span></li>
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total <span>{orderTotal}{symbol}</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row order-success-sec">
                                    <div className="col-sm-12">
                                        <h4>Résumé</h4>
                                        <ul className="order-detail">
                                            <li>Order ID: {payment.id}</li>
                                            <li>Date de la commande: {CheckDate}</li>
                                            <li>Total de la commande: {orderTotal}{symbol}</li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-12 payment-mode">
                                        <h4>méthode de paiement</h4>
                                        <p>Carte de débit/crédit</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            :
            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="error-section">
                                <h1>404</h1>
                                <h2>page not found</h2>
                                <a href="/" className="btn btn-solid">retourner à l'accueil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default orderSuccess