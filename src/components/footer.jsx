import { Typography } from "@material-tailwind/react";

export const Footer = () => (
	<footer className="w-full border-t border-blue-gray-50 py-6 text-center md:justify-between">
		<div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 ">
			<Typography className="font-normal">
				&copy; 2024 Ben
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				<li>
					<a href="/about-us" class="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
						About Us
					</a>
				</li>
				<li>
					<a href="/contribute" class="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
						Contribute
					</a>
				</li>
				<li>
					<a href="/contact-us" class="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	</footer>
);