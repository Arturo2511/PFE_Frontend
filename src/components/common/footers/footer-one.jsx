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
                            <div className="col-lg-4 col-md-12">
                                <div className="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div className="footer-contant">
                                    <div className="footer-logo">
                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} ><img src={`${process.env.PUBLIC_URL}/assets/images/icon/logo.png`} alt="" /></Link>
                                    </div>
                                    <p>Artishop est un site internet permettant à des artisans belges d’avoir une visibilité sur internet.</p>                                
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
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" />
                                        </li>
                                        <li>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" />
                                        </li>
                                        <li>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" />
                                        </li>
                                        <li>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" />
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