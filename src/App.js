import { Header, Services, ContactUs, Technologies, Footer, AboutUs } from "./components";
import { BrowserRouter } from 'react-router-dom'
import { Banner } from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
