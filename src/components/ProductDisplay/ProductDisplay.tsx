import type { ProductDisplayProps } from "../../types";

// Displays a product with optional description and stock status.
// The "Add to Cart" button renders only when `onAddToCart` is provided
// and is disabled for out-of-stock products.
const ProductDisplay = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}: ProductDisplayProps) => {
  return (
    <div className="card product-card">
      {product.imageUrl && (
        <img className="product-image" src={product.imageUrl} alt={product.name} />
      )}
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>

      {showDescription && <p>{product.description}</p>}

      {showStockStatus && (
        <p>{product.inStock ? "In stock" : "Out of stock"}</p>
      )}

      {onAddToCart && (
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
};

export default ProductDisplay;
