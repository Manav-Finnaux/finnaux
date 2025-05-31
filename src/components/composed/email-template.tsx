import { Html, Head, Body, Container, Text, Section, Hr, Tailwind, render } from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

export function ContactFormEmail({ name, email, phone, city, message }: ContactFormEmailProps) {

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white p-6 rounded-lg shadow-md mx-auto my-10 max-w-lg">
            <Section className="text-center">
              <Text className="text-2xl font-bold text-gray-800">New Contact Form Submission</Text>
              <Hr className="border-gray-300 my-4" />
            </Section>
            <Section>
              <Text className="text-base text-gray-700">
                You&apos;ve received a new message from your website&apos;s contact form.
              </Text>
              <Text className="text-base text-gray-700">
                <strong className="text-gray-900">Name:</strong> {name}
              </Text>
              <Text className="text-base text-gray-700">
                <strong className="text-gray-900">Email:</strong> {email}
              </Text>
              <Text className="text-base text-gray-700">
                <strong className="text-gray-900">Phone:</strong> {phone}
              </Text>
              <Text className="text-base text-gray-700">
                <strong className="text-gray-900">City:</strong> {city}
              </Text>
              <Text className="text-base text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-md mt-4">
                <strong className="text-gray-900">Message:</strong><br />{message}
              </Text>
            </Section>
            <Section className="text-center mt-8 text-gray-500 text-sm">
              <Hr className="border-gray-300 my-4" />
              <Text>This email was sent from your contact form.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
};

export default async function renderEmail({ name, email, phone, city, message }: ContactFormEmailProps) {
  return await render(<ContactFormEmail name={name} email={email} phone={phone} city={city} message={message} />)
}