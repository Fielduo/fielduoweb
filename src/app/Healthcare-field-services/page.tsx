import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Health from "./Healthcare-field-services";

export default function HealthcareFieldServices() {
    return (
        <div>
            <head>
         <title>Healthcare Management Service Software | Fielduo</title>
      <meta
        name="description"
        content="Enhance efficiency with Fielduo’s healthcare management service platform — smart scheduling, asset tracking, and compliance made simple."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content="Healthcare Management Service Software | Fielduo" />
      <meta
        property="og:description"
        content="Keep your healthcare services running seamlessly with Fielduo’s easy-to-use platform — designed to simplify scheduling, monitor assets, and handle compliance with confidence."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fielduo.com/Healthcare-field-services" />
      <meta property="og:site_name" content="Fielduo" />
      </head>
            <Navbar />
            <Health />
            <Footer />
        </div>
    );
}