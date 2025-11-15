import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutFielduo from "./About";

function AboutPage() {
  return (
    <div>
      <head>
         <title>About Fielduo | Advanced Field Service Management Application for Efficient Operations</title>
      <meta
        name="description"
        content="Discover how Fielduo's Field Service Management Application helps businesses streamline field operations, improve team productivity, and deliver superior service. Learn about our mission, innovative solutions, and dedication to empowering service teams."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content="About Fielduo | Advanced Field Service Management Application for Efficient Operations" />
      <meta
        property="og:description"
        content="Learn how Fielduo boost businesses to manage teams, automate workflows, and deliver superior field service. Explore our mission and vision for transforming field operations."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fielduo.com/About" />
      <meta property="og:site_name" content="Fielduo" />
      </head>
      <Navbar />
        <AboutFielduo />
      <Footer />
    </div>
  );
}

export default AboutPage;