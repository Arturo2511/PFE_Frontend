import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Creer un compte</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Prénom</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="Prénom" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Nom</label>
                                                <input type="password" className="form-control" id="lname"
                                                       placeholder="Nom" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="text" className="form-control" id="email"
                                                       placeholder="Email" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Mot de passe</label>
                                                <input type="password" className="form-control" id="review"
                                                       placeholder="Mot de passe" required="" />
                                            </div>
                                            <a href="#" className="btn btn-solid">Creer un compte</a>
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