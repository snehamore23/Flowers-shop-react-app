import "./ProductCards.css"

function ProductCards({product}) {
  return (
    <div>
      <Navbar active="home"/>
      <PageTitle title="Welcome to our Flowers Shop!"
      subtitle="Discover our beautiful collection of flowers"/>
      <p>Discover a wide variety of beautiful flowers for every occasion. From vibrant roses to elegant lilies, we have the perfect blooms to brighten your day. Explore our collection and find the perfect bouquet for your loved ones or yourself. .</p>
      <div className="products-containers">
      
      {PRODUCTS.map((product)=>{
          return (
              <div className="product-container">
                  <img src={product.image} className="product-image" alt={product.title} />
                  <h1 className="product-title">{product.title}</h1>
                  <p className="product-price">Rs.{product.price.toFixed(2)}</p>
                  <p className="product-description">{product.description}</p>
              </div>
          
          );
          
      })}
      </div>
    </div>
  );
}

export default ProductCards;