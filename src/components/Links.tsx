import { Card, Flex, Heading, Link, Tabs, Text } from "@radix-ui/themes";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import LinksData from "../types/LinksData";

const linkSections: LinksData[] = [
  {
    sectionHeading: "Socials",
    links: [
      {
        icon: "",
        text: "Facebook",
        url: "",
      },
      {
        icon: "",
        text: "Reddit",
        url: "",
      },
      {
        icon: "",
        text: "Instagram",
        url: "",
      },
      {
        icon: "",
        text: "Twitter / X",
        url: "",
      },
    ],
  },
  {
    sectionHeading: "Work",
    links: [
      {
        icon: "",
        text: "Naukri",
        url: "",
      },
      {
        icon: "",
        text: "LinkedIn",
        url: "",
      },
      {
        icon: "",
        text: "Freelancer",
        url: "",
      },
      {
        icon: "",
        text: "Unstop",
        url: "",
      },
    ],
  },
  {
    sectionHeading: "Others",
    links: [
      {
        icon: "",
        text: "Discord",
        url: "",
      },
      {
        icon: "",
        text: "Messenger",
        url: "",
      },
      {
        icon: "",
        text: "Whatsapp",
        url: "",
      },
      {
        icon: "",
        text: "GMail",
        url: "",
      },
    ],
  },
];

export default function Links() {
  return (
    <Card className="w-full shadow-iris-a5/60 shadow-lg">
      <Flex
        direction={"column"}
        as={"div"}
        gap={"2"}
        justify={"between"}
        m={"1"}
      >
        <Heading
          size={"6"}
          as={"h1"}
          align={{ initial: "center", xs: "left" }}
          weight={"bold"}
          wrap={"pretty"}
        >
          My Links
        </Heading>
        <Text align={{ initial: "center", xs: "left" }}>
          Links to some of my profiles on the internet.
        </Text>
        <Tabs.Root defaultValue={linkSections[0].sectionHeading}>
          <Tabs.List size={"2"} wrap={"nowrap"} justify={"start"}>
            {linkSections.map((val, idx) => (
              <Tabs.Trigger value={val.sectionHeading} key={idx}>
                {val.sectionHeading}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {linkSections.map((val, idx) => {
            return (
              <Tabs.Content value={val.sectionHeading} key={idx} asChild={true}>
                <Flex
                  p={"3"}
                  width={"100%"}
                  gap={"3"}
                  direction={"column"}
                  mt={"3"}
                >
                  {val.links.map((innerVal, innerIdx) => {
                    return (
                      <Link
                        href={innerVal.url}
                        key={innerIdx}
                        underline={"hover"}
                      >
                        <Text
                          weight={"regular"}
                          size={"4"}
                          as={"span"}
                          className="flex items-center justify-start"
                        >
                          {innerVal.text}&nbsp;
                          <ArrowTopRightIcon />
                        </Text>
                      </Link>
                    );
                  })}
                </Flex>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </Flex>
    </Card>
  );
}
