import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator';

import Breadcrumb from "../common/breadcrumb";
import {getCartTotal} from "../../services";

class checkOut extends Component {

    constructor (props) {
        super (props)

        const user = JSON.parse(localStorage.getItem("user"));

        this.state = {
            payment:'stripe',
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            email: user.email,
            country: user.country,
            address: user.address,
            number: user.number,
            city: user.city,
            zip_code: user.zip_code
        }
        this.validator = new SimpleReactValidator();
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }

      setStateFromCheckbox = (event) => {
          var obj = {};
          obj[event.target.name] = event.target.checked;
          this.setState(obj);

          if(!this.validator.fieldValid(event.target.name))
          {
              this.validator.showMessages();
          }
        }

    checkhandle(value) {
        this.setState({
            payment: value
        })
    }

    StripeClick = () => {

        if (this.validator.allValid()) {
            var handler = (window).StripeCheckout.configure({
                key: 'pk_test_glxk17KhP7poKIawsaSgKtsL',
                locale: 'auto',
                token: (token: any) => {
                    console.log(token)
                    console.log(this.props)
                    fetch('http://localhost:3030/sale/', {
                        method: 'PUT',
                        body: JSON.stringify(this.props),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                        })
                        .then(res => {
                            if (res.status === 200) {
                                this.props.history.push({
                                    pathname: '/order-success',
                                        state: { payment: token, items: this.props.cartItems, orderTotal: this.props.total, symbol: this.props.symbol }
                                })
                            } else {
                                const error = new Error(res.error);
                                throw error;
                            }
                        })
                        .catch(err => {
                            alert('Une erreur a été détecté dans le paiement');
                        });
                }
              });
              handler.open({
                name: 'Artishop',
                amount: this.props.total * 100,
                currency: 'eur',
                email: this.state.email,
                allowRememberMe: false
              })
        } else {
          this.validator.showMessages();
          this.forceUpdate();
        }
    }

    render (){
        const {cartItems, symbol, total} = this.props;
        
        return (
            <div>
                <Breadcrumb  title={'Caisse'}/>

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <form>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>Détails de Facturation</h3>
                                            </div>
                                            <div className="row check-out">
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Prénom</div>
                                                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('firstname', this.state.firstname, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Nom</div>
                                                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('lastname', this.state.lastname, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Téléphone</div>
                                                    <input type="text" name="phone"  value={this.state.phone} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('phone', this.state.phone, 'required|phone')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Email</div>
                                                    <input type="text" name="email" value={this.state.email} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Pays</div>
                                                    <select name="country" value={this.state.country} onChange={this.setStateFromInput} disabled>
                                                        <option>Belgique</option>
                                                    </select>
                                                    {this.validator.message('country', this.state.country, 'required')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Adresse</div>
                                                    <input type="text" name="address" value={this.state.address} onChange={this.setStateFromInput} placeholder="Rue" disabled/>
                                                    {this.validator.message('address', this.state.address, 'required|min:1|max:120')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Numéro</div>
                                                    <input type="text" name="number" value={this.state.number} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('number', this.state.number, 'required|min:1|max:10')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Ville</div>
                                                    <input type="text" name="city" value={this.state.city} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('city', this.state.city, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">Code Postal</div>
                                                    <input type="text" name="zip_code" value={this.state.zip_code} onChange={this.setStateFromInput} disabled/>
                                                    {this.validator.message('zip_code', this.state.zip_code, 'required|integer')}
                                                </div>                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Produit <span> Total</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {cartItems.map((item, index) => {
                                                            return <li key={index}>{item.name}<span>{item.price}{symbol} </span></li> })
                                                        }
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Sous-Total <span className="count">{total}{symbol}</span></li>
                                                    </ul>

                                                    <ul className="total">
                                                        <li>Total <span className="count">{total}{symbol}</span></li>
                                                        <li>Après le paiement, le vendeur prendra contact avec vous pour la livraison ou le retrait des articles.</li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    <div className="upper-box">
                                                        <div className="payment-options">
                                                            <ul>
                                                                <li>
                                                                    <div className="radio-option stripe">
                                                                        <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />
                                                                        <label htmlFor="payment-2">Carte de débit/crédit</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {(total !== 0)?
                                                    <div className="text-right">
                                                        <button type="button" className="btn-solid btn" onClick={() => this.StripeClick()} >Payer</button>
                                                    </div>
                                                    : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row section-t-space">
                                        <div className="col-lg-6">
                                            <div className="stripe-section">
                                                <h5>Carte de crédit</h5>
                                                <div>
                                                    <h5 className="checkout_class">Stripe Test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Numéro de carte</td>
                                                                <td>4242424242424242</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>2/2020</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>2222</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps
)(checkOut)