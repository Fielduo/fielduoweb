import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactForm from './Contact';


export default function Contact() {
  return (
    <>
    <head>
         <title>Contact Fielduo | Get in Touch for Smarter Field Service Management Solutions</title>
      <meta
        name="description"
        content="Have questions or need a demo? Connect with the Fielduo team today! We’re here to help you streamline field operations, boost productivity, and enhance your service business with our all-in-one field service management software."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content="Contact Fielduo | Get in Touch for Smarter Field Service Management Solutions" />
      <meta
        property="og:description"
        content="Reach out to the Fielduo team for any questions, support, or partnership opportunities. We’re always ready to help you simplify field operations and grow your service business with smart, reliable tools."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fielduo.com/Contact" />
      <meta property="og:site_name" content="Fielduo" />
      </head>
      <Navbar />

          <ContactForm />
      <Footer />
    </>
  );
}