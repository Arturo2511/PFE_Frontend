import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Breadcrumb from "../common/breadcrumb";

class Login extends Component {

    constructor (props) {
        super (props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3030/user/login/', {
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
          alert("Email ou mot de passe incorrect");
        });
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
                                    <form className="theme-form" onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email"
                                                   value={this.state.email}
                                                   onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <input type="password" className="form-control" id="password"
                                                   placeholder="Mot de passe" value={this.state.password}
                                                   onChange={this.handleChange} />
                                        </div>
                                        <input type="submit" className="btn btn-solid" value="Se connecter" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>Nouveau client</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Creer un compte</h6>
                                    <p>Inscrivez-vous maintenant sur notre boutique. L'inscription est rapide et facile. Cela vous permettra d'acheter ou de vendre depuis notre boutique.</p>
                                    
                                    <Link to={`${process.env.PUBLIC_URL}/pages/register`}><a className="btn btn-solid">Creer un compte</a></Link>
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