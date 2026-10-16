import { type Context, createContext } from "react";
import DEFAULT_CONTEXT_DATA from "../constants/theme-data";
import type ThemeContextData from "../types/ThemeContextData";

const ThemeContext: Context<ThemeContextData> =
	createContext<ThemeContextData>(DEFAULT_CONTEXT_DATA);

export default ThemeContext;
