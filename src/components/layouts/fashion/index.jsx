import React, { Component } from 'react';
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import HeaderOne from '../../common/headers/header-one'
import NewProducts from './collection';
import FooterOne from "../../common/footers/footer-one";

class Fashion extends Component {

	render() {
            var slidesix = {
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 6,
                responsive: [
                    {
                        breakpoint: 1367,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }

                ]
            }

		return (
			<div>
                {/*Home Slider*/}
                <section className="p-0">
                    <Slider  className="slide-1 home-slider">
                        <div>
                            <div className="home home1 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>bienvenue sur artishop</h4>
                                                    <h1>une boutique spécialisée pour les artisans belges</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>
                {/*Home Section End*/}

                <NewProducts />

			</div>
			)


	}
}

export default Fashion;