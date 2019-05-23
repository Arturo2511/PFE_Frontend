import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)

        this.state = {
            pseudo:'',
            firstname:'',
            lastname:'',
            password:'',
            password2:'',
            address:'',
            number:'',
            zip_code:'',
            city:'',
            country:'Belgique',
            email:'',
            phone:'',
            description:''
        }

    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    onSubmit = (event) => {
        if(this.state.password === this.state.password2) {
            event.preventDefault();
            fetch('http://localhost:3030/user/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(res => {
            if (res.status === 200) {
                this.props.history.push('/');
            } else {
                const error = new Error(res.error);
                throw error;
            }
            })
            .catch(err => {
            console.error(err);
            alert('Erreur de connexion, veuillez réessayer');
            });
        } else {
            alert("Les mots de passe ne correspondent pas")
        }
    }

    render (){
        return (
            <div>
                <Breadcrumb title={'creer un compte'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Creer un compte</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="pseudo">Pseudo</label>
                                                <input type="text" className="form-control" id="pseudo"
                                                       placeholder="Pseudo" value={this.state.pseudo} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="firstname">Prénom</label>
                                                <input type="text" className="form-control" id="firstname"
                                                       placeholder="Prénom" value={this.state.firstname} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="lastname">Nom</label>
                                                <input type="text" className="form-control" id="lastname"
                                                       placeholder="Nom" value={this.state.lastname} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-9">
                                                <label htmlFor="address">Rue</label>
                                                <input type="text" className="form-control" id="address"
                                                       placeholder="Rue" value={this.state.address} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="number">Numéro</label>
                                                <input type="text" className="form-control" id="number"
                                                       placeholder="Numéro" value={this.state.number} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="zip">Code Postal</label>
                                                <input type="text" className="form-control" id="zip"
                                                       placeholder="Code Postal" value={this.state.zip_code} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-9">
                                                <label htmlFor="city">Ville</label>
                                                <input type="text" className="form-control" id="city"
                                                       placeholder="Ville" value={this.state.city} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="country">Pays</label>
                                                <input type="text" className="form-control" id="country"
                                                       placeholder="Pays" value={this.state.country} disabled />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="email" className="form-control" id="email"
                                                       placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone">Téléphone</label>
                                                <input type="tel" className="form-control" id="phone"
                                                       placeholder="Téléphone" value={this.state.phone} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="description">Description</label>
                                                <input type="text" className="form-control" id="description"
                                                       placeholder="Description" value={this.state.description} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password">Mot de passe</label>
                                                <input type="password" className="form-control" id="password"
                                                       placeholder="Mot de passe" value={this.state.password} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password2">Confirmation du Mot de passe</label>
                                                <input type="password" className="form-control" id="password2"
                                                       placeholder="Mot de passe" value={this.state.password2} onChange={this.handleChange} />
                                            </div>
                                            <input type="submit" className="btn btn-solid" value="Creer un compte" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register