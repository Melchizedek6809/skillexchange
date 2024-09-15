import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";

import { RegisterForm } from "./register";
import { LoginForm } from "./login";

export const AuthCard = () => (
	<Tabs value="login">
		<TabsHeader>
			<Tab key="login" value="login">Log In</Tab>
			<Tab key="register" value="register">Register</Tab>
		</TabsHeader>
		<TabsBody>
			<TabPanel key="login" value="login">
				<LoginForm />
			</TabPanel>
			<TabPanel key="register" value="register">
				<RegisterForm />
			</TabPanel>
		</TabsBody>
	</Tabs>
);
