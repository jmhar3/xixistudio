import { Text, Title } from "@mantine/core";

import PageLayout from "../components/PageLayout";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";

function Contact() {
  return (
    <PageLayout>
      <Title ta="center" size="3em" ff="Alex Brush" fw="normal">
        Make an Inquiry
      </Title>

      <Text ta="center">
        We’re available to answer any questions you may have so if you’re unsure
        of anything get in touch or come in person for an open day on the first
        Sunday of the month.
        <br />
        Shoot us an email at inquiries@xixistudiomelb.com | Call or text us at
        0499999999
      </Text>

      <ContactForm />

      <Location />
    </PageLayout>
  );
}

export default Contact;
