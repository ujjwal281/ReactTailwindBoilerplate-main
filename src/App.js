import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import PricingPage from "./components/PricingPage.jsx"

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex justify-center items-center flex-col gap-x-4 gap-y-8 ">
        <PricingPage/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
