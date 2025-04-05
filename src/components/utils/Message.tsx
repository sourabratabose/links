import {
  PersonIcon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import {
  Flex,
  TextField,
  TextArea,
  Button,
  Link,
  Text,
  Badge,
} from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useState } from "react";
import messageSend from "../../functions/MessageSend";

export default function Message() {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<"none" | "success" | "fail">(
    "none"
  );
  

  const submitHandler: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSendingMessage(true);
    try {
      const formObject = Object.fromEntries(new FormData(e.currentTarget));

      const response = await messageSend(formObject);
      if (response) setSendStatus("success");
      else setSendStatus("fail");
      setTimeout(() => setSendStatus("none"), 3000);
    } catch (e) {
      console.error("Failed parsing the email : ", e);
    } finally {
      setSendingMessage(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Flex direction={"column"} gap={"3"} my={"3"}>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Your Name
          </Text>
          <TextField.Root
            placeholder="Enter your full name"
            name="name"
            disabled={sendingMessage}
          >
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
          </TextField.Root>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Contact E-Mail
          </Text>
          <TextField.Root
            placeholder="Enter your email"
            name="email"
            disabled={sendingMessage}
          >
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
          </TextField.Root>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Company Name{" "}
            <Text as={"span"} color={"gray"} weight={"regular"}>
              ( Optional )
            </Text>
          </Text>
          <TextField.Root
            placeholder="Enter your company name"
            name="companyName"
            disabled={sendingMessage}
          />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Your Message
          </Text>
          <TextArea
            placeholder="Your Message..."
            name="message"
            disabled={sendingMessage}
          />
        </label>
      </Flex>
      <Flex
        direction={"row"}
        justify={"between"}
        align={"center"}
        width={"100%"}
      >
        <Link href="mailto:bose.sourabrata21century@gmail.com" underline={"hover"} asChild={true}>
          <Button type="button" variant={"surface"} size={"2"}>
            Email Me
            <ArrowTopRightIcon />
          </Button>
        </Link>
        {sendStatus == "none" ? (
          <Button
            type="submit"
            loading={sendingMessage}
            disabled={sendingMessage}
            size={"2"}
          >
            Subscribe <PaperPlaneIcon />
          </Button>
        ) : sendStatus == "success" ? (
          <Badge color={"grass"} size={"3"}>
            Sign up successful
          </Badge>
        ) : (
          <Badge color={"ruby"} size={"3"}>
            Failed to signup
          </Badge>
        )}
      </Flex>
    </form>
  );
}
