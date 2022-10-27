import React from 'react'
import C1 from "../styles/Images/Slide1.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import C2 from "../styles/Images/Slide2.png";
import C3 from "../styles/Images/slide3.png";
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
										<h1 class="h1 text-[#ffae42]">
											<b>Zay</b> eCommerce
										</h1>
										<h3 class="h2">Tiny and Perfect eCommerce Template</h3>
										<p>
											Zay Shop is an eCommerce HTML5 CSS template with latest
											version of Bootstrap 5 (beta 1). This template is 100%
											free provided by{" "}
											<a
												rel="sponsored noreferrer"
												class="text-[#ffae42]"
												href="https://templatemo.com"
												target="_blank"
											>
												TemplateMo
											</a>{" "}
											website. Image credits go to{" "}
											<a
												rel="sponsored noreferrer"
												class="text-[#ffae42]"
												href="https://stories.freepik.com/"
												target="_blank"
											>
												Freepik Stories
											</a>
											,
											<a
												rel="sponsored noreferrer"
												class="text-[#ffae42]"
												href="https://unsplash.com/"
												target="_blank"
											>
												Unsplash
											</a>{" "}
											and
											<a
												rel="sponsored noreferrer"
												class="text-[#ffae42]"
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
										<h1 class="h1 text-[#ffae42]">
											<b>Zay</b> eCommerce
										</h1>
										<h3 class="h2">Tiny and Perfect eCommerce Template</h3>
										<p>
											Ex ut officia reprehenderit laborum irure culpa labore
											aliqua. Cupidatat do sit ipsum et quis consequat velit
											velit. Culpa Lorem amet voluptate irure cupidatat officia
											commodo voluptate Lorem aliqua mollit. Sunt deserunt
											reprehenderit dolor deserunt. Dolore sit proident commodo
											qui fugiat. Consequat consectetur consequat nulla ex sunt
											labore aliquip culpa adipisicing voluptate deserunt magna
											ad nisi. Commodo aute est proident tempor. .
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
										<h1 class="h1 text-[#ffae42]">
											<b>Zay</b> eCommerce
										</h1>
										<h3 class="h2">Tiny and Perfect eCommerce Template</h3>
										<p>
											Ut ut esse aute labore laborum do irure anim laboris amet.
											Fugiat velit esse sunt consectetur elit mollit. Do
											occaecat tempor irure eu id exercitation. Velit aliqua est
											et sunt mollit eiusmod ut anim. Commodo aliqua voluptate
											duis ipsum proident reprehenderit commodo enim et. Commodo
											incididunt quis nostrud sit velit esse magna ipsum aliqua
											et id ipsum in. Deserunt amet quis aliquip nulla
											exercitation non adipisicing occaecat sint elit dolor elit
											fugiat. Aute occaecat officia culpa in mollit sit velit
											duis nostrud enim aute. Ad proident irure et id aliqua
											voluptate reprehenderit amet consectetur cillum aliquip
											mollit amet. .
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

					<FaChevronLeft size={50} color="#ffae42" />
				</a>
				<a
					class="carousel-control-next text-decoration-none w-auto pe-3"
					href="#template-mo-zay-hero-carousel"
					role="button"
					data-bs-slide="next"
				>
					{/* <i class="fas fa-chevron-right"></i> */}
					<FaChevronRight size={50} color="#ffae42" />
				</a>
			</div>
		</div>
	);
}

export default MainSlider