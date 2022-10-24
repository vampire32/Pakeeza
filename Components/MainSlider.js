import React from 'react'
import C1 from "../styles/Images/banner_img_01.jpg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import C2 from "../styles/Images/banner_img_02.jpg";
import C3 from "../styles/Images/banner_img_03.jpg";
import Image from "next/image";

const MainSlider = () => {
  return (
		<div>
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
		</div>
	);
}

export default MainSlider