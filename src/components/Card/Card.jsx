import "./Card.css"



const Card = ({ product }) => {
  return (
    <div className="product-card" >
      <div className="img-wrp">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          title={product.title}
        />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.price}€</p>
      </div>
    </div>
  )
}

export default Card