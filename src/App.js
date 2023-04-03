import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Shorten from "./components/Shorten"
import Statistics from "./components/Statistics"
import Boost from "./components/Boost"
import FooterNavigation from "./components/FooterNavigation"
import Footer from "./components/Footer"

function App() {
  return <main className="pt-[40px]">
    <div className="px-[25px] md:px-[25px] xl:px-[100px]">
      <Header />
      <Introduction />
    </div>
    <div className="px-[25px] xl:px-[100px] bg-gray-50">
      <Shorten />
      <Statistics />
    </div>
    <Boost />
    <FooterNavigation />
    <Footer className="mt-[20px] text-[14px]" />
  </main>;
}

export default App;
