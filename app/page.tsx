import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Padding from "./components/layout/Padding";
import Maps from "./components/Maps";

export default function Home() {
  return (
    <Padding>
      <Hero />
      <div className="mt-5"></div>
      <Stats />
      <div className="mt-14"></div>
      <About />
      <div className="mt-14"></div>
      <Services />
      <div className="mt-14"></div>
      <Maps />
    </Padding>
  );
}
