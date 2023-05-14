import { Header, Services, ContactUs, Partnerships, Technologies, Footer } from "./components";
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
        <Partnerships />
        <Technologies />
        <ContactUs />
        <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
