import {
	Card,
	Input,
	Button,
	CardBody,
	CardHeader,
	Typography,
} from "@material-tailwind/react";

export const RegisterForm = () => (
	<>
		<CardHeader shadow={false} floated={false} className="text-center">
			<Typography
				variant="h2"
				color="blue"
				className="mb-2 !text-4xl lg:text-5xl"
			>
				Register
			</Typography>
		</CardHeader>
		<CardBody>
			<form
				action="#"
				className="flex flex-col gap-4 md:mt-12"
			>
				<Input
					id="email"
					color="blue"
					size="lg"
					type="email"
					name="email"
					label="E-Mail"
					className="!w-full"
				/>
				<Input
					id="password"
					color="blue"
					size="lg"
					type="password"
					name="password"
					label="Password"
					className="!w-full"
				/>
				<Input
					id="password-confirm"
					color="blue"
					size="lg"
					type="password"
					name="password-confirm"
					label="Confirm Password"
					className="!w-full"
				/>
				<Button size="lg" color="blue" fullWidth>
					Register
				</Button>
				<Typography
					variant="small"
					className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
				>
					Upon signing in, you consent to abide by our
					<a href="#" className="text-gray-900">
						Terms of Service
					</a>
					&amp;
					<a href="#" className="text-gray-900">
						Privacy Policy.
					</a>
				</Typography>
			</form>
		</CardBody>
	</>
);;
