import { Container, Flex, Theme } from "@radix-ui/themes";
import { useContext } from "react";
import Actions from "./components/Actions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Links from "./components/Links";
import ThemeContext from "./contexts/ThemeContext";
import type ThemeContextData from "./types/ThemeContextData";

function App() {
	const { currentTheme }: ThemeContextData = useContext(ThemeContext);
	return (
		<Theme appearance={currentTheme} accentColor={"iris"} grayColor={"gray"}>
			<Header />
			<Container
				size={"3"}
				minHeight={"100vh"}
				align={"center"}
				pt={"80px"}
				mx={"5"}
				mb={"5"}
			>
				<Flex
					direction={"column"}
					gap={"5"}
					align={"center"}
					justify={"start"}
					height={"100%"}
				>
					<Hero />
					<Links />
					<Actions />
				</Flex>
			</Container>
			<Footer />
		</Theme>
	);
}

export default App;
