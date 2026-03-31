import { useState } from "react"
import "./OurService.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import BodyContainer from "../../components/BodyContainer/BodyContainer"
import PageTitle from "../../components/PageTitle/PageTitle"

const SERVICES = [
  {
    id: 1,
    title: "Custom Bouquet Design",
    summary: "Personalized flower arrangements for weddings, gifts and events.",
    details: "Choose your favorite colors, flowers, and style. We handcraft each bouquet with fresh blooms and deliver it safely to your doorstep.",
    icon: "💐",
  },
  {
    id: 2,
    title: "Same-Day Delivery",
    summary: "Fresh flowers delivered the same day across the city.",
    details: "Order before 2PM and we will deliver your floral gift within hours, guaranteed. Perfect for last-minute celebrations and surprise deliveries.",
    icon: "🚚",
  },
  {
    id: 3,
    title: "Flower Care Tips",
    summary: "Expert advice to keep your blooms fresh longer.",
    details: "Get simple care instructions for watering, trimming, and arranging to make your flowers stay vibrant for up to two weeks.",
    icon: "🌿",
  },
  {
    id: 4,
    title: "Wedding & Event Styling",
    summary: "Custom floral décor for weddings, parties and corporate events.",
    details: "Let our design team create venue arrangements, aisle displays, and table centerpieces that match your vision and theme.",
    icon: "✨",
  },
  {
    id: 5,
    title: "Monthly Flower Subscription",
    summary: "Fresh seasonal blooms delivered to you every month.",
    details: "Choose a subscription plan to enjoy rotating floral arrangements that bring color and fragrance into your home or office.",
    icon: "📅",
  },
  {
    id: 6,
    title: "Gift Wrapping & Personal Notes",
    summary: "Beautifully wrapped bouquets with a handwritten message.",
    details: "Add deluxe gift packaging and a custom note. We make every delivery feel special and ready to give.",
    icon: "🎁",
  },
]

function OurService() {
  const [activeService, setActiveService] = useState(null)
  const [query, setQuery] = useState("")

  const filteredServices = SERVICES.filter((service) =>
    `${service.title} ${service.summary}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <Navbar active="our-service" />
      <PageTitle
        title="Our Services"
        subtitle="We provide the freshest flowers with fast delivery and custom designs"
      />

      <BodyContainer>
        <div className="service-topbar">
          <p>
            Browse our floral services, then click a card to reveal more details and reserve your favorite option.
          </p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
            className="service-search"
          />
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <button
              key={service.id}
              type="button"
              className={`service-card ${activeService === service.id ? "active" : ""}`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-info">
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              {activeService === service.id && (
                <div className="service-details">{service.details}</div>
              )}
            </button>
          ))}
          {filteredServices.length === 0 && (
            <div className="service-empty">No services found for "{query}".</div>
          )}
        </div>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default OurService