import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Medical from "./Medical-device-services";

export default function MedicalDeviceServices() {
    return (
        <div>
            <head>
         <title>Medical Device Services Field Service Software | Fielduo</title>
      <meta
        name="description"
        content="Manage medical device services more efficiently with Fielduo’s AI and IoT tools — powerful field service software for enhanced efficiency."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content="Medical Device Services Field Service Software | Fielduo" />
      <meta
        property="og:description"
        content="Fielduo helps you handle medical device servicing with ease using AI-powered insights and IoT connectivity. Improve uptime, simplify field tasks, and enhance service quality."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fielduo.com/Medical-device-services" />
      <meta property="og:site_name" content="Fielduo" />
      </head>
            <Navbar />
            <Medical />
            <Footer />
        </div>
    );
}