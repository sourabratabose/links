import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch } from "radix-ui";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import type ThemeContextData from "../types/ThemeContextData";

export default function ThemeButton() {
	const { currentTheme, toggleTheme }: ThemeContextData =
		useContext(ThemeContext);
	return (
		<Switch.Root
			className={
				"relative cursor-pointer w-11 h-7 rounded-full bg-iris-a7 shadow-md shadow-iris-a3"
			}
			checked={currentTheme === "dark"}
			onCheckedChange={(isDark: boolean) =>
				isDark ? toggleTheme("dark") : toggleTheme("light")
			}
		>
			<Switch.Thumb
				className={
					"absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white left-0.5 data-[state=checked]:translate-x-4"
				}
			>
				{currentTheme === "dark" ? (
					<MoonIcon className="text-black" />
				) : (
					<SunIcon className="text-black" />
				)}
			</Switch.Thumb>
		</Switch.Root>
	);
}
