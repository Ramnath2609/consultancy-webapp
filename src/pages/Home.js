import { Header, Services, ContactUs, Technologies, Footer, AboutUs } from "../components";
import { Banner } from "../components/Banner";

export function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Services />
        <Technologies />
        <AboutUs />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}