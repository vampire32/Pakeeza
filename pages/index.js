import Head from 'next/head'
import React, { useRef, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import C1 from '../styles/Images/banner_img_01.jpg'
import {FaChevronRight} from 'react-icons/fa'
import { FaChevronLeft } from "react-icons/fa";
import C2 from '../styles/Images/banner_img_02.jpg'
import C3 from "../styles/Images/banner_img_03.jpg";
import home from '../styles/Images/home.png'
import ref from "../styles/Images//ref.png";
import air from "../styles/Images/air.png";
import kitch from "../styles/Images/kitch.png";
import led from "../styles/Images/led.png";
import wash from "../styles/Images/wash.png";
import { Testimonials } from '../Components/Testimonials'
import ContactForm from '../Components/ContactForm'
import ProductCards from '../Components/ProductCards'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination,Navigation } from "swiper";

export default function Home() {
  return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				id="template-mo-zay-hero-carousel"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<ol class="carousel-indicators">
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="0"
						class="active"
					></li>
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="1"
					></li>
					<li
						data-bs-target="#template-mo-zay-hero-carousel"
						data-bs-slide-to="2"
					></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C3} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-success">
											<b>Zay</b> eCommerce
										</h1>
										<h3 class="h2">Tiny and Perfect eCommerce Template</h3>
										<p>
											Zay Shop is an eCommerce HTML5 CSS template with latest
											version of Bootstrap 5 (beta 1). This template is 100%
											free provided by{" "}
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://templatemo.com"
												target="_blank"
											>
												TemplateMo
											</a>{" "}
											website. Image credits go to{" "}
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://stories.freepik.com/"
												target="_blank"
											>
												Freepik Stories
											</a>
											,
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://unsplash.com/"
												target="_blank"
											>
												Unsplash
											</a>{" "}
											and
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://icons8.com/"
												target="_blank"
											>
												Icons 8
											</a>
											.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C1} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-success">
											<b>Zay</b> eCommerce
										</h1>
										<h3 class="h2">Tiny and Perfect eCommerce Template</h3>
										<p>
											Zay Shop is an eCommerce HTML5 CSS template with latest
											version of Bootstrap 5 (beta 1). This template is 100%
											free provided by{" "}
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://templatemo.com"
												target="_blank"
											>
												TemplateMo
											</a>{" "}
											website. Image credits go to{" "}
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://stories.freepik.com/"
												target="_blank"
											>
												Freepik Stories
											</a>
											,
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://unsplash.com/"
												target="_blank"
											>
												Unsplash
											</a>{" "}
											and
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://icons8.com/"
												target="_blank"
											>
												Icons 8
											</a>
											.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="container">
							<div class="row p-5">
								<div class="mx-auto col-md-8 col-lg-6 order-lg-last">
									<div class="img-fluid">
										<Image src={C2} alt="" />
									</div>
								</div>
								<div class="col-lg-6 mb-0 d-flex align-items-center">
									<div class="text-align-left align-self-center">
										<h1 class="h1 text-success">
											<b>Zay</b> eCommerce
										</h1>
										<h3 class="h2">Tiny and Perfect eCommerce Template</h3>
										<p>
											Zay Shop is an eCommerce HTML5 CSS template with latest
											version of Bootstrap 5 (beta 1). This template is 100%
											free provided by{" "}
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://templatemo.com"
												target="_blank"
											>
												TemplateMo
											</a>{" "}
											website. Image credits go to{" "}
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://stories.freepik.com/"
												target="_blank"
											>
												Freepik Stories
											</a>
											,
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://unsplash.com/"
												target="_blank"
											>
												Unsplash
											</a>{" "}
											and
											<a
												rel="sponsored noreferrer"
												class="text-success"
												href="https://icons8.com/"
												target="_blank"
											>
												Icons 8
											</a>
											.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev text-decoration-none w-auto ps-3"
					href="#template-mo-zay-hero-carousel"
					role="button"
					data-bs-slide="prev"
				>
					{/* <i class="fas fa-chevron-left"></i> */}

					<FaChevronLeft size={50} color="#59ab6e" />
				</a>
				<a
					class="carousel-control-next text-decoration-none w-auto pe-3"
					href="#template-mo-zay-hero-carousel"
					role="button"
					data-bs-slide="next"
				>
					{/* <i class="fas fa-chevron-right"></i> */}
					<FaChevronRight size={50} color="#59ab6e" />
				</a>
			</div>
			<div className="container mt-[3rem]">
				<h1 className="text-center text-[40px] font-bold pb-[4rem]">
					TOP CATEGORIES
				</h1>
				<div className="row text-center">
					<div className="col-md-2">
						<div>
							<Image
								src={air}
								width={100}
								height={50}
								// style={{
								// 	backgroundColor: "#C8FFD4 ",
								// 	borderRadius: "80%",
								// 	// paddingLeft: "8px",
								// 	// paddingRight: "8px",
								// 	// paddingTop: "8px",
								// 	// paddingBottom: "8px",
								// }}
							/>
						</div>
						<h3>AIR-CON & AIR COOLER</h3>
					</div>
					<div className="col-md-2 pb-[2rem]">
						<Image
							src={ref}
							width={100}
							height={50}
							// style={{
							// 	backgroundColor: "#59ab6e ",
							// 	borderRadius: "80%",
							// 	paddingLeft: "8px",
							// 	paddingRight: "8px",
							// 	paddingTop: "8px",
							// 	paddingBottom: "8px",
							// }}
						/>
						<h3>REFRIGERATOR & FREEZERS</h3>
					</div>
					<div className="col-md-2 pb-[2rem]">
						<Image
							src={led}
							width={100}
							height={50}
							// style={{
							// 	backgroundColor: "#59ab6e ",
							// 	borderRadius: "80%",
							// 	paddingLeft: "8px",
							// 	paddingRight: "8px",
							// 	paddingTop: "8px",
							// 	paddingBottom: "8px",
							// }}
						/>
						<h3>LED TV & SOUND SYSTEM</h3>
					</div>
					<div className="col-md-2 pb-[2rem]">
						<Image
							src={home}
							width={100}
							height={50}
							// style={{
							// 	backgroundColor: "#59ab6e ",
							// 	borderRadius: "80%",
							// 	paddingLeft: "8px",
							// 	paddingRight: "8px",
							// 	paddingTop: "8px",
							// 	paddingBottom: "8px",
							// }}
						/>
						<h3>HOME APPLIANCES</h3>
					</div>
					<div className="col-md-2 pb-[2rem]">
						<Image
							src={kitch}
							width={100}
							height={50}
							// style={{
							// 	backgroundColor: "#59ab6e ",
							// 	borderRadius: "80%",
							// 	paddingLeft: "8px",
							// 	paddingRight: "8px",
							// 	paddingTop: "8px",
							// 	paddingBottom: "8px",
							// }}
						/>
						<h3>BUILT-IN KITCHEN</h3>
					</div>
					<div className="col-md-2 pb-[2rem]">
						<Image
							src={wash}
							width={100}
							height={50}
							// style={{
							// 	backgroundColor: "#59ab6e ",
							// 	borderRadius: "80%",
							// 	paddingLeft: "8px",
							// 	paddingRight: "8px",
							// 	paddingTop: "8px",
							// 	paddingBottom: "8px",
							// }}
						/>
						<h3>WASHING SOLUTIONS</h3>
					</div>
				</div>
			</div>
			<div className="conatiner mt-[4rem]">
				<h1 className="text-center font-bold text-[40px] pb-[4rem]">
					Our New Brands
				</h1>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
				</Swiper>
			</div>
			<section
				className="u-clearfix u-color-scheme-u10 u-color-style-multicolor-1 u-grey-90 u__section_111"
				id="sec-d871"
				data-aos="zoom-in"
			>
				<div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
					<div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
						<div className="u-layout">
							<div className="u-layout-row">
								<div className="u-align-center-sm u-align-center-xs u-align-justify-lg u-align-justify-md u-align-justify-xl u-container-style u-layout-cell u-left-cell u-size-42 u-layout-cell-1">
									<div className="u-container-layout u-valign-middle u-container-layout-1">
										<h3 className="u-custom-font u-font-ubuntu u-text u-text-1">
											Are You Interested Call Us Now!
											<br />
											<span className="u-text-palette-1-base">
												<b>
													<span className="u-text-palette-3-base">
														+92-21-34390018
													</span>
												</b>
											</span>
											<span className="u-text-palette-3-base"></span>
											<br />
											<br />
											<span style={{ fontSize: "1.5rem" }}>
												All you have to do is phone or email us for an
												appointment, and our assessment specialist will contact
												you. Don’t waste any more time on various platforms;
												call us right now and let&nbsp; acquire it from us.
											</span>
											<br />
										</h3>
									</div>
								</div>
								<div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-18 u-layout-cell-2">
									<div className="u-container-layout u-container-layout-2">
										<a
											href="tel:+92-21-34390018"
											className="u-border-none u-btn u-btn-round u-button-style u-hover-white u-palette-3-base u-radius-50 u-btn-1"
										>
											<span className="u-icon">
												<svg
													className="u-svg-content"
													viewBox="0 0 513.64 513.64"
													x="0px"
													y="0px"
													style={{ width: "1em", height: "1em" }}
												>
													<path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72 c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"></path>
												</svg>
											</span>
											&nbsp;Call now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="conatiner mt-[4rem]">
				<h1 className="text-center font-bold text-[40px] pb-[4rem]">
					Our Trending
				</h1>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1199: {
							slidesPerView: 3,
						},
					}}
					spaceBetween={30}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCards />
					</SwiperSlide>
				</Swiper>
			</div>
			<Testimonials />
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Master Cleanse Reliac Heirloom
						</h1>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							havent heard of them man bun deep jianbing selfies heirloom prism
							food truck ugh squid celiac humblebrag.
						</p>
					</div>
					<div class="flex flex-wrap -m-4 text-center">
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-green-500 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M8 17l4 4 4-4m-4-5v9"></path>
									<path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									2.7K
								</h2>
								<p class="leading-relaxed">Downloads</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-green-500 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									1.3K
								</h2>
								<p class="leading-relaxed">Users</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-green-500 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M3 18v-6a9 9 0 0118 0v6"></path>
									<path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									74
								</h2>
								<p class="leading-relaxed">Files</p>
							</div>
						</div>
						<div class="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="text-green-500 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
								<h2 class="title-font font-medium text-3xl text-gray-900">
									46
								</h2>
								<p class="leading-relaxed">Places</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ContactForm />
		</div>
	);
}
