import React from 'react'

const ProductCards = () => {
  return (
		<div>
			{/* <section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-wrap -m-4">
						
					</div>
				</div>
			</section> */}
			<div class="p-4   ">
				<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
					<a class="block relative h-48 rounded overflow-hidden">
						<img
							alt="ecommerce"
							class="object-cover object-center w-full h-full block"
							src="https://dummyimage.com/421x261"
						/>
					</a>
					<div class="p-6 drop-shadow-xl">
						<span class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							CATEGORY
						</span>
						<h3 class="title-font text-lg font-medium text-gray-900 mb-3">
							The Catalyzer
						</h3>

						<div class="flex items-center flex-wrap ">
							<a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
								View
								<svg
									class="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M5 12h14"></path>
									<path d="M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCards