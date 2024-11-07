
import "./ProductDetails.css"



const ProductDetails = ({ product }) => {

  if (!product || !product.rating) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <section className="section-product-details">
      <div className="div-img">
        <img src={product.image} alt={product.title} title={product.title} loading="lazy" />
      </div>
      <div className="div-product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>valoración: {product.rating.rate} /5</p>
        <p>{product.rating.count} reviews </p>
      </div>
    </section>
  )

}

export default ProductDetails