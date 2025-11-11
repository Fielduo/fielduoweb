import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pricing from "./Pricing";

function PricingPage() {
  return (
<div>
  <Head>
        <title>Fielduo Pricing | Affordable Field Service Management Plans</title>
        <meta
          name="description"
          content="Explore Fielduo's flexible pricing plans designed for small, medium, and enterprise-level field service businesses. Scale your operations with transparent, affordable rates."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fielduo Pricing | Affordable Field Service Management Plans" />
        <meta
          property="og:description"
          content="Compare Fielduo's plans and choose the best solution for your field service business. Start managing jobs, invoices, and teams efficiently today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fielduo.com/Pricing" />
        <meta property="og:site_name" content="Fielduo" />
      </Head>
      <Navbar />
        <Pricing />
      <Footer />
</div>
  );
}

export default PricingPage;