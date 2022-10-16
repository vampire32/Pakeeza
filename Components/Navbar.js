import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-light"
				style={{ backgroundColor: "#e3f2fd" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Pakeeza Electronics
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a className="nav-link" aria-current="page">
									<Link href="/">Home</Link>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" aria-current="page">
									<Link href="/">About</Link>
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="nav-link" aria-current="page">
											<Link href="/">Home</Link>
										</a>
									</li>
									<li>
										<a className="nav-link" aria-current="page">
											<Link href="/">Home</Link>
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="nav-link" aria-current="page">
											<Link href="/">Home</Link>
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" aria-current="page">
									<Link href="/Contactus">Contact Us</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar
