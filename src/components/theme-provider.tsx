import React from "react";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

interface TeamSliderProps {
	children?: React.ReactNode
}

export const ThemeProvider: React.FC<TeamSliderProps> = ({ children }) => {
	return <MTThemeProvider>{children}</MTThemeProvider>;
};

export default ThemeProvider;