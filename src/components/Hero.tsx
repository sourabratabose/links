import {
  ChevronDownIcon,
  ChevronUpIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Callout,
  Card,
  Em,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";
import HeroSection from "../constants/Hero";

export default function Hero() {
  const [expanded, setExpand] = useState<boolean>(false);
  return (
    <>
      <Card className="shadow-iris-a5/60 shadow-lg">
        <Flex
          direction={{ initial: "column", xs: "row" }}
          justify={"center"}
          align={{ initial: "center", xs: "start" }}
          gap={"5"}
          width={"100%"}
          m={"1"}
        >
          <Avatar size={"9"} fallback={"Sourabrata Bose"} src={""} />
          <Flex direction={"column"} as={"div"} gap={"4"} justify={"between"}>
            <Heading
              size={"6"}
              as={"h1"}
              align={{ initial: "center", xs: "left" }}
              weight={"bold"}
              wrap={"pretty"}
            >
              It's me <span className="text-nowrap">Sourabrata Bose</span>
            </Heading>
            <Text
              align={{ initial: "center", xs: "left" }}
              className={
                "text-ellipsis" + " " + (expanded ? "" : "line-clamp-2")
              }
            >
              {HeroSection.intro}{" "}
              {HeroSection.technologies.map((val, idx) =>
                idx != HeroSection.technologies.length - 1 ? (
                  <>
                    <Em>{val}</Em>
                    {", "}
                  </>
                ) : (
                  <>
                    {"and "}
                    <Em>{val}</Em>
                  </>
                )
              )}
            </Text>
            <Box className={expanded ? "h-full" : "overflow-hidden h-0"}>
              <Text align={{ initial: "center", xs: "left" }}>
                {HeroSection.expandedParas.map((val, idx) =>
                  idx != HeroSection.expandedParas.length - 1 ? (
                    <>
                      {val}
                      <br />
                      <br />
                    </>
                  ) : (
                    val
                  )
                )}
              </Text>
            </Box>
            <Flex
              direction={"row"}
              align={"center"}
              justify={"end"}
              mt={"auto"}
            >
              <Button
                variant={expanded ? "surface" : "solid"}
                onClick={() => setExpand((prev_state) => !prev_state)}
                className=""
              >
                Read {expanded ? "Less" : "More"}
                {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      <Callout.Root
        variant={"surface"}
        className="w-full flex items-start sm:items-center justify-start"
      >
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text className="flex items-start sm:items-center justify-start gap-2 text-ellipsis overflow-hidden">
          <Text weight={"bold"} size={"2"} as={"span"} className="text-nowrap">
            Status :&nbsp;
          </Text>
          <Text align={"left"} as={"span"} size={"2"}>
            {HeroSection.status}
          </Text>
        </Callout.Text>
      </Callout.Root>
    </>
  );
}
