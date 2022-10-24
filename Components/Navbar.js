import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm  w-full z-10 navbar-design ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-evenly w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<span className=" font-bold text-xl cursor-pointer">
									Pakeeza<span className="text-green-500">Electronics</span>
								</span>
							</div>
							<div className="hidden md:block">
								<div className=" ml-10 flex items-baseline space-x-4">
									<a className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/">
											Home
										</Link>
									</a>

									<a className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/About">
											About
										</Link>
									</a>
									<a className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/Services">
											Services
										</Link>
									</a>

									<a class="dropdown cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black">
										<a
											class=" dropdown-toggle"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Categories
										</a>
										<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
											<li>
												<Link href="/Products">
													<a class="dropdown-item">AIR-CON & AIR COOLER</a>
												</Link>
											</li>
											<Link href="/Products">
												<a class="dropdown-item">REFRIGERATOR & FREEZERS</a>
											</Link>

											<Link href="/Products">
												<a class="dropdown-item">LED TV & SOUND SYSTEM</a>
											</Link>
											<Link href="/Products">
												<a class="dropdown-item">HOME APPLIANCES</a>
											</Link>
											<Link href="/Products">
												<a class="dropdown-item">BUILT-IN KITCHEN</a>
											</Link>
											<Link href="/Products">
												<a class="dropdown-item">WASHING SOLUTIONS</a>
											</Link>
										</ul>
									</a>

									<a className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/Contact">
											Contact
										</Link>
									</a>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-[5rem] space-y-1 sm:px-3"
							>
								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">Home</Link>
								</a>
								<a class="dropdown cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a
										class=" dropdown-toggle"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Categories
									</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
										<li>
											<Link href="/Products">
												<a class="dropdown-item">AIR-CON & AIR COOLER</a>
											</Link>
										</li>
										<Link href="/Products">
											<a class="dropdown-item">REFRIGERATOR & FREEZERS</a>
										</Link>

										<Link href="/Products">
											<a class="dropdown-item">LED TV & SOUND SYSTEM</a>
										</Link>
										<Link href="/Products">
											<a class="dropdown-item">HOME APPLIANCES</a>
										</Link>
										<Link href="/Products">
											<a class="dropdown-item">BUILT-IN KITCHEN</a>
										</Link>
										<Link href="/Products">
											<a class="dropdown-item">WASHING SOLUTIONS</a>
										</Link>
									</ul>
								</a>

								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">Home</Link>
								</a>

								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">Home</Link>
								</a>

								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">Home</Link>
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default NavBar;
