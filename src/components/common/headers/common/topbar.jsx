import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopBar extends Component {

    constructor (props) {
        super (props)

       
    }

    render() {

        const user = JSON.parse(localStorage.getItem("user"));

        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>Contactez-nous :  <a href="call:+32 2 718 10 10">+32 2 718 10 10</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="onhover-dropdown mobile-account">
                                    {(user)?
                                     <div>
                                    <i className="fa fa-user" aria-hidden="true"></i> Mon compte
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/logout`} data-lng="fr">Se déconnecter</Link>
                                        </li>
                                    </ul></div>  :
                                    <div><i className="fa fa-user" aria-hidden="true"></i> Mon compte
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="fr">Connexion</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="fr">S'inscrire</Link>
                                        </li>
                                    </ul>
                                    </div>
                                }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TopBar;