import { useEffect, useState } from "react";
import {
	Navbar,
	Collapse,
	Button,
	IconButton,
	Dialog,
} from "@material-tailwind/react";
import { AuthCard } from "./auth/auth";

export const NavbarDefault = () => {
	const [openNav, setOpenNav] = useState(false);
	const [authOpen, setAuthOpen] = useState(false);


	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false),
		);
	}, []);

	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<li className="flex items-center gap-x-2 p-1 font-medium">
				<a href="/dashboard" className="flex items-center transition-colors hover:text-blue-500 focus:text-blue-500">
					Dashboard
				</a>
			</li>
			<li className="flex items-center gap-x-2 p-1 font-medium">
				<a href="/people" className="flex items-center transition-colors hover:text-blue-500 focus:text-blue-500">
					People
				</a>
			</li>
			<li className="flex items-center gap-x-2 p-1 font-medium">
				<a href="/skills" className="flex items-center transition-colors hover:text-blue-500 focus:text-blue-500">
					Skills
				</a>
			</li>
		</ul>
	);

	return (
		<>
			<Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-4 lg:py-2">
				<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
					<a href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
						<img src="/public/skillxchange_black.svg" alt="Skill X change" />
					</a>
					<div className="hidden lg:block">{navList}</div>
					<div className="flex items-center gap-x-1">
						<Button
							variant="gradient"
							size="sm"
							color="blue"
							className="hidden lg:inline-block"
							onClick={() => setAuthOpen(true)}
						>
							<span>Log In</span>
						</Button>
					</div>
					<IconButton
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-6 w-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<div className="container mx-auto">
						{navList}
						<div className="flex items-center gap-x-1">
							<Button fullWidth variant="text" size="sm" className="">
								<span>Log In</span>
							</Button>
						</div>
					</div>
				</Collapse>
			</Navbar>
			<Dialog 
				open={authOpen}
				handler={() => setAuthOpen(false)}
			>
				<AuthCard />
			</Dialog>
		</>
	);
};