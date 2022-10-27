import React from 'react'
import BG from '../styles/Images/about-hero.svg'
import Image from "next/image";
import {FiTruck} from 'react-icons/fi'
import {FaExchangeAlt} from 'react-icons/fa'
import {FiPercent} from "react-icons/fi"
import {Ri24HoursLine} from 'react-icons/ri'
import {FaChevronRight} from 'react-icons/fa'
import { FaChevronLeft } from "react-icons/fa";

const About = () => {
  return (
		<div>
			<section class="bg-success py-5">
				<div class="container">
					<div class="row align-items-center py-5">
						<div class="col-md-8 text-white">
							<h1>About Us</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div class="col-md-4">
							<Image src={BG} alt="About Hero" />
						</div>
					</div>
				</div>
			</section>
			<section class="container py-5">
				<div class="row">
					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								{/* <i class="fa fa-truck fa-lg"></i> */}
								<div className="flex justify-center">
									<FiTruck />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">Delivery Services</h2>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								<div className="flex justify-center">
									<FaExchangeAlt />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">Shipping & Return</h2>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								<div className="flex justify-center">
									<FiPercent />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">Promotion</h2>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 pb-5">
						<div class="h-100 py-5 services-icon-wap shadow">
							<div class="h1 text-success text-center">
								<div className="flex justify-center">
									<Ri24HoursLine />
								</div>
							</div>
							<h2 class="h5 mt-4 text-center">24 Hours Service</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="u-clearfix u-white usection2">
				<div className="u-align-center u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-container-style u-custom-item u-list-item u-palette-1-light-1 u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-3">
									Our Vision
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-4">
									<span>
										&nbsp; Our vision is simple to be an effectivevalue-added
										technology partner trusted by its clients through our
										consultative selling, support and services for their every
										exploration with innovations.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-default u-text-5">
									Our Mission
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-palette-1-base u-text-6">
									<span className="u-text-body-alt-color">
										&nbsp; Creating a powerful and valued brand associated to
										being a trusted corporate strategy consultant that will be
										synonymous with developing and addressing the business
										problems of customers through technological change and
										innovation.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-7">
									Our Core Values
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-8">
									<span>
										Committed with dedication.
										<br />
										&nbsp;Teamwork &amp; Synchronization.&nbsp;
										<br />
										Compliance professionally
										<br />
										Best Recommendations.
										<br />
										&nbsp;Consultancy with Excellency.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
            <section class="bg-light py-5 mt-10">
        <div class="container my-4">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Our Brands</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div class="col-lg-9 m-auto tempaltemo-carousel">
                    <div class="row d-flex flex-row">
                       
                        <div class="col-1 align-self-center">
                            <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                <FaChevronLeft/>
                            </a>
                        </div>
                       
                        <div class="col">
                            <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                               
                                <div class="carousel-inner product-links-wap" role="listbox">

                                   
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                                
                            </div>
                        </div>
                        

                        
                        <div class="col-1 align-self-center">
                            <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                <FaChevronRight/>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
		</div>
	);
}

export default About