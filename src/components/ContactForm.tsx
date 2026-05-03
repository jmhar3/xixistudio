import { useMemo, useState } from "react";

import {
  Flex,
  Grid,
  Text,
  Stack,
  Divider,
  Textarea,
  TextInput,
  Button,
} from "@mantine/core";

interface FormData {
  email: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  hireType?: "Space Only" | "Space & Gear";
  duration?: number;
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [formFields, setFormFields] = useState<FormData>({ email: "" });

  const total = useMemo(() => {
    if (formFields.hireType === "Space Only")
      return (formFields.duration || 1) * 100;
    if (formFields.hireType === "Space & Gear")
      return (formFields.duration || 1) * 150;
  }, [formFields]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    setFormFields((prevForm) => ({
      ...prevForm,
      [field]: event.target.value,
    }));
  };

  const onFormSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    if (formFields.email.length === 0) {
      setErrorMessage("Please provide a valid email");
      return;
    }

    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    if (formFields.hireType) formData.append("Hire Type", formFields.hireType);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormFields({ email: "" });
    } else {
      console.log("Error", data);
      if (data.message) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage(
          "Sorry, an error occured. Send me a message using my contact details below.",
        );
      }
    }
    setIsSubmitting(false);
  };

  return (
    <form
      style={{ width: "100%" }}
      method="post"
      onSubmit={onFormSubmit}
      action="https://api.web3forms.com/submit"
    >
      <Grid
        py="md"
        w="100%"
        style={{
          borderTop: "solid 1px #f4f4f4",
          borderBottom: "solid 1px #f4f4f4",
        }}
      >
        <Grid.Col
          pr="md"
          span={4}
          style={{
            borderRight: "solid 1px #f4f4f4",
          }}
        >
          <Stack gap="md" h="100%">
            <TextInput
              w="100%"
              label="Email"
              type="email"
              withAsterisk
              value={formFields.email}
              onChange={(event) => onChange(event, "email")}
            />

            <Divider />

            <Textarea
              h="100%"
              label="Message"
              value={formFields.message}
              onChange={(event) => onChange(event, "message")}
              resize="vertical"
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={8} pl="md">
          <Stack gap="md">
            <Flex gap="md">
              <TextInput
                w="100%"
                type="date"
                label="Preferred Date"
                value={formFields.preferredDate}
                onChange={(event) => onChange(event, "preferredDate")}
              />

              <Divider orientation="vertical" />

              <TextInput
                w="100%"
                type="time"
                label="Preferred Time"
                value={formFields.preferredTime}
                onChange={(event) => onChange(event, "preferredTime")}
              />
            </Flex>

            <Divider />

            <Flex gap="md" align="center">
              <Stack gap="3px" w="100%">
                <Text size="sm">Hire Type</Text>
                <Button.Group w="100%">
                  <Button
                    w="100%"
                    mr="3px"
                    c="#f4f4f4"
                    color="#f4f4f4"
                    variant={
                      formFields.hireType === "Space Only"
                        ? "gradient"
                        : "light"
                    }
                    onClick={() =>
                      setFormFields((prevForm) => ({
                        ...prevForm,
                        hireType: "Space Only",
                      }))
                    }
                  >
                    Space Only
                  </Button>

                  <Button
                    w="100%"
                    c="#f4f4f4"
                    color="#f4f4f4"
                    variant={
                      formFields.hireType === "Space & Gear"
                        ? "gradient"
                        : "light"
                    }
                    onClick={() =>
                      setFormFields((prevForm) => ({
                        ...prevForm,
                        hireType: "Space & Gear",
                      }))
                    }
                  >
                    Space & Gear
                  </Button>
                </Button.Group>
              </Stack>
              {/*<TextInput
                w="100%"
                label="Hire Type"
                value={formFields.hireType}
              />*/}

              <Divider orientation="vertical" />

              <TextInput
                w="100%"
                type="number"
                label="Duration"
                value={formFields.duration}
                onChange={(event) => onChange(event, "duration")}
              />
            </Flex>

            <Divider />

            <input
              type="hidden"
              name="access_key"
              value="cd0c7928-bc7b-4c05-a40f-a0afa619602d"
            />

            <Flex gap="md" justify="space-between">
              <Flex align="center" gap="sm">
                {formFields.hireType && (
                  <>
                    <Text size="1.5em" h="1em">
                      Total:
                    </Text>
                    <Text ff="Alex Brush" size="1.8em" h="1.3em">
                      ${total}
                    </Text>
                  </>
                )}
              </Flex>

              <Stack>
                <Button
                  size="md"
                  c="#f4f4f4"
                  color="#f4f4f4"
                  variant="light"
                  type="submit"
                  loading={isSubmitting}
                >
                  Send Inquiry
                </Button>

                {errorMessage && <Text c="red">{errorMessage}</Text>}
              </Stack>
            </Flex>
          </Stack>
        </Grid.Col>
      </Grid>
    </form>
  );
}

export default ContactForm;
