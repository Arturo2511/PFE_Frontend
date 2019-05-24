import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'

import Breadcrumb from "../common/breadcrumb";

class Logout extends Component {

    render (){
            localStorage.removeItem('user');

            return (
                <Redirect to='/' />
            )
    }
}

export default Logout