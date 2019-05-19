import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class FooterOne extends Component {

    constructor(props){
        super(props);
    }
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /*=====================
     Tap on Top
     ==========================*/
    handleScroll = () => {
        if (document.documentElement.scrollTop > 600) {
            document.querySelector(".tap-top").style = "display: block";
        } else {
            document.querySelector(".tap-top").style = "display: none";
        }
    }
    clickToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            document.querySelector(".footer-title h4").innerHTML += '<span class="according-menu"></span>';

            var anchors = document.getElementsByClassName('footer-title');
            for(var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                anchor.onclick = function() {
                    var elems = document.querySelectorAll(".footer-title");
                    [].forEach.call(elems, function(elemt) {
                        elemt.classList.remove("active");
                        var el = elemt.nextElementSibling;

                        el.style.height = el.offsetHeight + 'px'
                        el.style.transitionProperty = `height, margin, padding`
                        el.style.transitionDuration = '500ms'
                        el.offsetHeight // eslint-disable-line no-unused-expressions
                        el.style.overflow = 'hidden'
                        el.style.height = 0
                        el.style.paddingTop = 0
                        el.style.paddingBottom = 0
                        el.style.marginTop = 0
                        el.style.marginBottom = 0
                        el.style.display = 'none'
                        el.style.removeProperty('height')
                        el.style.removeProperty('padding-top')
                        el.style.removeProperty('padding-bottom')
                        el.style.removeProperty('margin-top')
                        el.style.removeProperty('margin-bottom')
                        el.style.removeProperty('overflow')
                        el.style.removeProperty('transition-duration')
                        el.style.removeProperty('transition-property')

                    });

                        this.classList.add('active');
                        var element = this.nextElementSibling;
                        element.style.removeProperty('display')
                        let display = window.getComputedStyle(element).display
                        if (display === 'none') display = 'block'
                        element.style.display = display
                        let height = element.offsetHeight
                        element.style.overflow = 'hidden'
                        element.style.height = 0
                        element.style.paddingTop = 0
                        element.style.paddingBottom = 0
                        element.style.marginTop = 0
                        element.style.marginBottom = 0
                        element.offsetHeight // eslint-disable-line no-unused-expressions
                        element.style.transitionProperty = `height, margin, padding`
                        element.style.transitionDuration = '500ms'
                        element.style.height = height + 'px'
                        element.style.removeProperty('padding-top')
                        element.style.removeProperty('padding-bottom')
                        element.style.removeProperty('margin-top')
                        element.style.removeProperty('margin-bottom')
                        window.setTimeout(function () {
                            element.style.removeProperty('height')
                            element.style.removeProperty('overflow')
                            element.style.removeProperty('transition-duration')
                            element.style.removeProperty('transition-property')
                        }, 500)
                }
            }

            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: none";
            });
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }


        /*=====================
         Pre loader
         ==========================*/
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

    render () {
        let tap_to_top = {display: 'none'}
        return (
            <footer className="footer-light">
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row footer-theme partition-f">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div className="footer-contant">
                                    <div className="footer-logo">
                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} ><img src={`${process.env.PUBLIC_URL}/assets/images/icon/logo.png`} alt="" /></Link>
                                    </div>
                                    <p>Artishop est un site internet permettant à des artisans belges d’avoir une visibilité sur internet.</p>
                                    <div className="footer-social">
                                        <ul>
                                            <li>
                                                <Link to={'https://www.facebook.com/'} ><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                            </li>
                                            <li>
                                                <Link to={'https://plus.google.com/'} ><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                            </li>
                                            <li>
                                                <Link to={'https://twitter.com'}><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                            </li>
                                            <li>
                                                <Link to={'https://instagram.com'}><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                                            </li>
                                            <li>
                                                <Link to={'https://rss.com/'}><i className="fa fa-rss" aria-hidden="true"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col offset-xl-1">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>my account</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >womens</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >clothing</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >accessories</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >featured</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>why we choose</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li><a href="#">shipping & return</a></li>
                                            <li><a href="#">secure shopping</a></li>
                                            <li><a href="#">gallary</a></li>
                                            <li><a href="#">affiliates</a></li>
                                            <li><a href="#">contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>store information</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul className="contact-list">
                                            <li><i className="fa fa-map-marker"></i>Multikart Demo Store, Demo store
                                                India 345-659
                                            </li>
                                            <li><i className="fa fa-phone"></i>Call Us: 123-456-7898</li>
                                            <li><i className="fa fa-envelope-o"></i>Email Us: <a
                                                href="#">Support@Fiot.com</a></li>
                                            <li><i className="fa fa-fax"></i>Fax: 123456</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sub-footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="footer-end">
                                    <p><i className="fa fa-copyright" aria-hidden="true"></i> 2019 Artishop - Powered by IPL</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="payment-card-bottom">
                                    <ul>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tap-top top-cls" onClick={this.clickToTop} style={tap_to_top}>
                    <div>
                        <i className="fa fa-angle-double-up"></i>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterOne;