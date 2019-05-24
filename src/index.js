import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import './index.scss';

// Import custom components
import store from './store';
import { getAllProducts } from './actions'
import Fashion from './components/layouts/fashion';

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";

// Product Pages
import SingleProduct from "./components/products/single";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import Login from './components/pages/login'
import Logout from './components/pages/logout'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'

class Root extends React.Component {

    render() {
        store.dispatch(getAllProducts());

        return(
        	<Provider store={store}>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
                        <Layout>
                            <Switch>
								<Route exact path={`${process.env.PUBLIC_URL}/`} component={Fashion}/>

								{/*Routes For Features (Product Collection) */}
								<Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar}/>

								{/*Routes For Single Product*/}
								<Route path={`${process.env.PUBLIC_URL}/product/:id`} component={SingleProduct}/>								

								{/*Routes For custom Features*/}
								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>

								{/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/logout`} component={Logout}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>

								<Route component={PageNotFound} />
                            </Switch>
						</Layout>
					  </ScrollContext>
					</BrowserRouter>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


