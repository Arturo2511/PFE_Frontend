import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Login extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        return (
            <div>
                <Breadcrumb title={'Connexion'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Connexion</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Mot de passe</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Mot de passe" required="" />
                                        </div>
                                        <a href="#" className="btn btn-solid">Se connecter</a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>Nouveau client</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Creer un compte</h6>
                                    <p>Inscrivez-vous maintenant sur notre boutique. L'inscription est rapide et facile. Cela vous permettra d'acheter ou de vendre depuis notre boutique.</p>
                                    <a href="#" className="btn btn-solid">Creer un compte</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Login