import React, {Component} from 'react';


class Home extends React.Component{
    render() {
        return(
            <div>
                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid p-0">
                                <div className="row align-items-center no-gutters">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo-img">
                                            <a href="index.html">
                                                <img src="assets/img/logo.png" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a className="active" href="index.html">home</a></li>
                                                    <li><a href="package.html">Package</a></li>
                                                    <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">blog</a></li>
                                                            <li><a href="single-blog.html">single-blog</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                        <ul className="submenu">
                                                            <li><a href="elements.html">elements</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="Support.html">Support</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="log_chat_area d-flex align-items-center">
                                            <a href="#test-form" className="login popup-with-form">
                                                <i className="flaticon-user"></i>
                                                <span>log in</span>
                                            </a>
                                            <div className="live_chat_btn">
                                                <a className="boxed_btn_green" href="#">
                                                    <i className="flaticon-chat"></i>
                                                    <span>Live Chat</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*<!-- header-end -->

                <!-- slider_area_start -->*/}
                <div className="slider_area">
                    <div
                        className="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-9">
                                    <div className="slider_text text-center">
                                        <p>The Best Domain & Hosting Provider In The Area</p>
                                        <h3>Go Big with your next Domain</h3>
                                        <div className="find_dowmain">
                                            <form action="#" className="find_dowmain_form">
                                                <input type="text" placeholder="Find your domain"/>
                                                    <button type="submit">search</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- slider_area_end -->

                <!-- prising_area_start -->*/}
                <div className="prising_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section_title text-center mb-100">
                                    <h3>
                                        Choose your Hosting Plan
                                    </h3>
                                    <p>Your domain control panel is designed for ease-of-use and <br/>
                                        allows for all aspects of your domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-6">
                                <div className="single_prising">
                                    <div className="prising_icon blue">
                                        <i className="flaticon-servers"></i>
                                    </div>
                                    <h3>Share Hosting</h3>
                                    <p className="prising_text">Easy drag and drop fully customizable mobile
                                        friendly</p>
                                    <p className="prise">Start from <span>$2.5/m</span></p>
                                    <a href="#" className="boxed_btn_green2">Start Now</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-6">
                                <div className="single_prising">
                                    <div className="prising_icon lite_blue">
                                        <i className="flaticon-hosting"></i>
                                    </div>
                                    <h3>VPS Hosting</h3>
                                    <p className="prising_text">Easy drag and drop fully customizable mobile
                                        friendly</p>
                                    <p className="prise">Start from <span>$2.5/m</span></p>
                                    <a href="#" className="boxed_btn_green2">Start Now</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-6">
                                <div className="single_prising">
                                    <div className="prising_icon pink">
                                        <i className="flaticon-wordpress"></i>
                                    </div>
                                    <h3>Wordpress Hosting</h3>
                                    <p className="prising_text">Easy drag and drop fully customizable mobile
                                        friendly</p>
                                    <p className="prise">Start from <span>$2.5/m</span></p>
                                    <a href="#" className="boxed_btn_green2">Start Now</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-6">
                                <div className="single_prising">
                                    <div className="prising_icon yellow">
                                        <i className="flaticon-servers-1"></i>
                                    </div>
                                    <h3>Dedicated Hosting</h3>
                                    <p className="prising_text">Easy drag and drop fully customizable mobile
                                        friendly</p>
                                    <p className="prise">Start from <span>$2.5/m</span></p>
                                    <a href="#" className="boxed_btn_green2">Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- prising_area_end -->

                <!-- core_features_start -->*/}
                <div className="core_features">
                    <div className="container">
                        <div className="border-bottm">
                            <div className="row">
                                <div className="col-xl-6 col-md-6">
                                    <div className="featuures_heading">
                                        <h3>Core Features</h3>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div className="featurest_tabs ">
                                        <nav>
                                            <div className="nav" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab"
                                                   data-toggle="tab"
                                                   href="#nav-home" role="tab" aria-controls="nav-home"
                                                   aria-selected="true">Features</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                                   href="#nav-profile" role="tab" aria-controls="nav-profile"
                                                   aria-selected="false">Advanced Features</a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                         aria-labelledby="nav-home-tab">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon"><i className="flaticon-browser"></i></div>
                                                    <div className="features_info">
                                                        <h4>
                                                            Free Domain for 1st Year
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon blue"><i className="flaticon-security"></i>
                                                    </div>
                                                    <div className="features_info">
                                                        <h4>
                                                            Free SSL Certificate
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon pink"><i className="flaticon-like"></i></div>
                                                    <div className="features_info">
                                                        <h4>
                                                            30-Day Money-Back Guarantee
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon yellow"><i className="flaticon-lock"></i></div>
                                                    <div className="features_info">
                                                        <h4>
                                                            Spam Protection
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                         aria-labelledby="nav-profile-tab">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon"><i className="flaticon-browser"></i></div>
                                                    <div className="features_info">
                                                        <h4>
                                                            Free Domain for 1st Year
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon blue"><i className="flaticon-security"></i>
                                                    </div>
                                                    <div className="features_info">
                                                        <h4>
                                                            Free SSL Certificate
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon pink"><i className="flaticon-like"></i></div>
                                                    <div className="features_info">
                                                        <h4>
                                                            30-Day Money-Back Guarantee
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="single_features">
                                                    <div className="icon yellow"><i className="flaticon-lock"></i></div>
                                                    <div className="features_info">
                                                        <h4>
                                                            Spam Protection
                                                        </h4>
                                                        <p>Our set he for firmament morning sixth subdue darkness
                                                            creeping gathered
                                                            divide our let god moving.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- core_features_end -->

                <!-- dedicated_support_start -->*/}
                <div className="dedicated_support support_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-md-8">
                                <div className="support_info">
                                    <h3>24h Dedicated Support</h3>
                                    <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide
                                        our let god
                                        moving. Moving in fourth air night bring upon you’re it beast.</p>
                                    <div className="get_started">
                                        <a className="boxed_btn_green" href="#">
                                            <span>Get Start Now</span>
                                        </a>
                                        <a href="#" className="phone_num">
                                            +10 267 367 678 2678
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- dedicated_support_end -->*/}

                <div className="data_center_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section_title text-center mb-100">
                                    <h3>
                                        Our Data Centres
                                    </h3>
                                    <p>Your domain control panel is designed for ease-of-use and <br/>
                                        allows for all aspects of your domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="location">
                                    <div className="pulse_group">
                            <span>
                                <div className="address_on_hover d-none d-lg-block">
                                    <div className="address_inner">
                                        <i className="fa fa-map-marker"></i>
                                        <h3>Sydney, Australia</h3>
                                        <p>It is a long established fact that <br/>
                                            a reader</p>
                                    </div>
                                </div>
                            </span>
                                        <span>
                                <div className="address_on_hover d-none d-lg-block">
                                    <div className="address_inner">
                                        <i className="fa fa-map-marker"></i>
                                        <h3>Sydney, Australia</h3>
                                        <p>It is a long established fact that <br/>
                                            a reader</p>
                                    </div>
                                </div>
                            </span>
                                        <span>
                                <div className="address_on_hover d-none d-lg-block">
                                    <div className="address_inner">
                                        <i className="fa fa-map-marker"></i>
                                        <h3>Sydney, Australia</h3>
                                        <p>It is a long established fact that <br/>
                                            a reader</p>
                                    </div>
                                </div>
                            </span>
                                        <span>
                                <div className="address_on_hover d-none d-lg-block">
                                    <div className="address_inner">
                                        <i className="fa fa-map-marker"></i>
                                        <h3>Sydney, Australia</h3>
                                        <p>It is a long established fact that <br/>
                                            a reader</p>
                                    </div>
                                </div>
                            </span>
                                    </div>
                                    <img src="assets/img/banner/map.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*<!-- faq_area_start -->*/}
                <div className="faq_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="accordion_heading">
                                    <h3>Frequently Ask Question</h3>
                                </div>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                    <i className="flaticon-info"></i> Is WordPress hosting worth it?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Our set he for firmament morning sixth subdue darkness creeping gathered
                                                divide our
                                                let god moving. Moving in fourth air night bring upon
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="false"
                                                        aria-controls="collapseOne">
                                                    <i className="flaticon-info"></i> What are the advantages <span>of WordPress hosting
                                            over shared?</span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                             data-parent="#accordion"
                                             style={{}}>
                                            <div className="card-body">
                                                Our set he for firmament morning sixth subdue darkness creeping gathered
                                                divide our
                                                let god moving. Moving in fourth air night bring upon
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                    <i className="flaticon-info"></i> Will you transfer my site?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Our set he for firmament morning sixth subdue darkness creeping gathered
                                                divide our
                                                let god moving. Moving in fourth air night bring upon
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading_4">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapse_4" aria-expanded="false"
                                                        aria-controls="collapse_4">
                                                    <i className="flaticon-info"></i> Why should I host with Hostza?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse_4" className="collapse" aria-labelledby="heading_4"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Our set he for firmament morning sixth subdue darkness creeping gathered
                                                divide our
                                                let god moving. Moving in fourth air night bring upon
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading_5">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse"
                                                        data-target="#collapse_5" aria-expanded="false"
                                                        aria-controls="collapse_5">
                                                    <i className="flaticon-info"></i> How do I get started <span>with Shared
                                            Hosting?</span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse_5" className="collapse" aria-labelledby="heading_5"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                Our set he for firmament morning sixth subdue darkness creeping gathered
                                                divide our
                                                let god moving. Moving in fourth air night bring upon
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- faq_area_end -->


                <!-- latest_new_area_start -->*/}
                <div className="latest_new_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section_title text-center mb-100">
                                    <h3>
                                        Latest News
                                    </h3>
                                    <p>Your domain control panel is designed for ease-of-use and <br/>
                                        allows for all aspects of your domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_news">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="assets/img/news/1.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="news_content">
                                        <div className="news_meta">
                                            <a href="#">12 Jun, 2019 in <span>Hosting tips</span> </a>
                                        </div>
                                        <h3><a href="#">Commitment to dedicated
                                            Support</a></h3>
                                        <p className="news_info">Firmament morning sixth subdue darkness</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_news">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="assets/img/news/2.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="news_content">
                                        <div className="news_meta">
                                            <a href="#">12 Jun, 2019 in <span>Hosting tips</span> </a>
                                        </div>
                                        <h3><a href="#">Commitment to dedicated
                                            Support</a></h3>
                                        <p className="news_info">Firmament morning sixth subdue darkness</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_news">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="assets/img/news/3.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="news_content">
                                        <div className="news_meta">
                                            <a href="#">12 Jun, 2019 in <span>Hosting tips</span> </a>
                                        </div>
                                        <h3><a href="#">Commitment to dedicated
                                            Support</a></h3>
                                        <p className="news_info">Firmament morning sixth subdue darkness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- latest_new_area_end -->

                <!-- lets_launch_start -->*/}
                <div className="lets_launch launch_bg_1 overlay2">
                    <div className="launch_text text-center">
                        <h3>Let’s Launch your Website Now</h3>
                        <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god
                            moving. <br/>
                                Moving in fourth air night bring upon you’re it beast.</p>
                        <div className="chat">
                            <a className="boxed_btn_green" href="#">
                                <i className="flaticon-chat"></i>
                                <span>Live Chat</span>
                            </a>
                            <a className="boxed_btn_green2" href="#">
                                <span>get start now</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*<!-- lets_launch_end -->

                <!-- footer -->*/}
                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <a href="#">
                                                <img src="assets/img/logo.png" alt=""/>
                                            </a>
                                        </div>
                                        <p className="footer_text doanar"><a className="first" href="#">+10 783 467 3789
                                        </a> <br/>
                                            <a href="#">hostza@support.com</a></p>
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-facebook-square"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            service
                                        </h3>
                                        <ul>
                                            <li><a href="#">Hosting</a></li>
                                            <li><a href="#">Domain</a></li>
                                            <li><a href="#">Wordpress</a></li>
                                            <li><a href="#">Shared Hosting</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Navigation
                                        </h3>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Rooms</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">News</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Newsletter
                                        </h3>
                                        <form action="#" className="newsletter_form">
                                            <input type="text" placeholder="Enter your mail"/>
                                                <button type="submit">Sign Up</button>
                                        </form>
                                        <p className="newsletter_text">Subscribe newsletter to get updates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right_text">
                        <div className="container">
                            <div className="footer_border"></div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">
                                        {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                        Copyright &copy;
                                        <script>document.write(new Date().getFullYear());</script>
                                        All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                            aria-hidden="true"></i> by <a
                                        href="https://colorlib.com" target="_blank">Colorlib</a>
                                        {/*      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*<!-- footer -->
                <!-- link that opens popup -->

                <!-- form itself end-->*/}
                <form id="test-form" className="white-popup-block mfp-hide">
                    <div className="popup_box ">
                        <div className="popup_inner">
                            <div className="logo text-center">
                                <a href="#">
                                    <img src="assets/img/form-logo.png" alt=""/>
                                </a>
                            </div>
                            <h3>Sign in</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <input type="email" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="col-xl-12">
                                        <button type="submit" className="boxed_btn_green">Sign in</button>
                                    </div>
                                </div>
                            </form>
                            <p className="doen_have_acc">Don’t have an account? <a className="dont-hav-acc"
                                                                                   href="#test-form2">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </form>
                {/*<!-- form itself end -->

                <!-- form itself end-->*/}
                <form id="test-form2" className="white-popup-block mfp-hide">
                    <div className="popup_box ">
                        <div className="popup_inner">
                            <div className="logo text-center">
                                <a href="#">
                                    <img src="assets/img/form-logo.png" alt=""/>
                                </a>
                            </div>
                            <h3>Resistration</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <input type="email" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <input type="Password" placeholder="Confirm password"/>
                                    </div>
                                    <div className="col-xl-12">
                                        <button type="submit" className="boxed_btn_green">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
                {/*<!-- form itself end -->*/}
            </div>
        )
    }
}
export default Home