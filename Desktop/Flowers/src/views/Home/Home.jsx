import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import BodyContainer from "../../components/BodyContainer/BodyContainer"
import ProductCards from "../../components/ProductCards/ProductCards"

function Home() {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <ProductCards />
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default Home