import Splash from "@/components/splash";
import Intro from "@/components/intro";
import About from "@/components/about";
import Sponsors from "@/components/sponsors";
import Faqs from "@/components/FAQs";
import Guilds from "@/components/guilds";
import Gallery from "@/components/gallery";
import End from "@/components/end";

import "@/styles/background.scss";
import "@/styles/splash.scss";

export default function HomePage() {
  return (
    <main>
      <section id="splash">
        <Splash />
      </section>

      <section id="intro">
        <Intro />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="faqs">
        <Faqs />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <section id="guilds">
        <Guilds />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="end">
        <End />
      </section>
    </main>
  );
}
