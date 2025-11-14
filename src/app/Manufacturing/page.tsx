import Navbar from "../Components/Navbar";
import Manufacturing from "./Manufacturing";
import Footer from "../Components/Footer";

export default function ManufacturingPage() {
  return (
    <div>
      <head>
         <title>Manufacturing Equipment Service Management Software | Fielduo</title>
      <meta
        name="description"
        content="Optimise manufacturing equipment maintenance, reduce downtime, and boost production efficiency with Fielduo’s intelligent service management software for manufacturers."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content="Manufacturing Equipment Service Management Software | Fielduo" />
      <meta
        property="og:description"
        content="Keep your factory floor moving without interruptions. Fielduo helps you manage maintenance smarter, reduce downtime, and increase productivity across your manufacturing processes."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fielduo.com/Manufacturing" />
      <meta property="og:site_name" content="Fielduo" />
      </head>
      <Navbar />

        <Manufacturing />
        <Footer />

    </div>
  );
}