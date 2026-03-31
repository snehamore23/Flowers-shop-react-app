import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./About.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import BodyContainer from "../../components/BodyContainer/BodyContainer"
import PageTitle from "../../components/PageTitle/PageTitle"
import aboutImg from "../../assets/1.png"

const FEATURE_CARDS = [
  {
    id: 1,
    icon: "🌸",
    title: "Fresh Daily",
    detail: "We source fresh flowers each morning from trusted growers so every bouquet looks bright and lasts longer.",
  },
  {
    id: 2,
    icon: "💝",
    title: "Gift Ready",
    detail: "Each order is arranged with beautiful packaging and ready to present as a meaningful gift.",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Fast Delivery",
    detail: "Same-day delivery ensures your flowers arrive quickly and stay fresh for the recipient.",
  },
]

function About() {
  const navigate = useNavigate()
  const [activeFeature, setActiveFeature] = useState(1)
  const selectedFeature = FEATURE_CARDS.find((feature) => feature.id === activeFeature)

  return (
    <div>
      <Navbar active="about" />
      <PageTitle
        title="Learn More About Us"
        subtitle="We provide beautiful, fresh flowers for every occasion."
      />
      <BodyContainer>
        <div className="about-row">
          <div className="about-text">
            <h2>Why choose Flowers?</h2>
            <p>
              Our flower shop delivers fresh blooms, thoughtful arrangements, and fast service.
              Every bouquet is created with love and designed to brighten your day.
            </p>
            <div className="about-highlights">
              <div className="highlight-pill">Daily fresh stock</div>
              <div className="highlight-pill">Custom gifts</div>
              <div className="highlight-pill">Delivered on time</div>
            </div>
            <p>
              We believe flowers bring joy, comfort, and celebration. Let us help you share
              those moments with the people who matter most.
            </p>
          </div>

          <div className="about-image-card">
            <img src={aboutImg} alt="Fresh flower bouquet" />
            <div className="about-card">
              <h3>Our Promise</h3>
              <p>
                Beautiful designs, on-time delivery, and a personal touch in every arrangement.
              </p>
            </div>
          </div>  
        </div>

        <div className="feature-section">
          <div className="feature-grid">
            {FEATURE_CARDS.map((feature) => (
              <button
                key={feature.id}
                type="button"
                className={`feature-card ${feature.id === activeFeature ? "active" : ""}`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <span className="feature-icon">{feature.icon}</span>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.detail}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="feature-detail-card">
            <h3>Detail</h3>
            <p>{selectedFeature.detail}</p>
            <div className="feature-actions">
              <button type="button" className="primary-button" onClick={() => navigate("/")}>Explore our bouquets</button>
              <button type="button" className="secondary-button" onClick={() => navigate("/contact")}>Contact us</button>
            </div>
          </div>
        </div>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default About