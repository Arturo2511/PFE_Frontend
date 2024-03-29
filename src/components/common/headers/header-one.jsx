import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBar from "./common/topbar";
import {connect} from "react-redux";

class HeaderOne extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
	}
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
			var contentwidth = window.innerWidth;
			if(contentwidth > 578) {
				document.getElementById("sticky").classList.add('fixed');
			}
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
	render() {

		return (
			<header id="sticky" className="sticky">
				{this.state.isLoading ? <Pace color="#27ae60"/> : null}
			    <div className="mobile-fix-option"></div>
				{/*Top Header Component*/}
				<TopBar/>

			    <div className="container">
			        <div className="row">
			            <div className="col-sm-12">
			                <div className="main-menu">
			                    <div className="menu-left">
			                        <div className="brand-logo">
                                        <Link to={`${process.env.PUBLIC_URL}/`}>
											<img src={`${process.env.PUBLIC_URL}/assets/images/icon/logo.png`} className="img-fluid" alt="" />
										</Link>
			                        </div>
			                    </div>
			                    <div className="menu-right pull-right">
									{/*Top Navigation Bar Component*/}
									<NavBar/>

			                        <div>
			                            <div className="icon-nav">
			                                <ul>
			                                    <li className="onhover-div mobile-search">
			                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.openSearch} className="img-fluid" alt="" />
			                                            <i className="fa fa-search" onClick={this.openSearch}></i></div>
			                                        <div id="search-overlay" className="search-overlay">
			                                            <div>
			                                                <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
			                                                <div className="overlay-content">
			                                                    <div className="container">
			                                                        <div className="row">
			                                                            <div className="col-xl-12">
			                                                                <form>
			                                                                    <div className="form-group">
			                                                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
			                                                                    </div>
			                                                                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
			                                                                </form>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </li>
												{/*Header Cart Component */}
												<CartContainer/>
			                                </ul>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</header>
			)
	}
}

export default connect(null)(HeaderOne);