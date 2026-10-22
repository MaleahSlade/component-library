import type { ProductDisplayProps } from "../../types";

const ProductDisplay = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
}: ProductDisplayProps) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>

      {showDescription && <p>{product.description}</p>}

      {showStockStatus && (
        <p>{product.inStock ? "In stock" : "Out of stock"}</p>
      )}

      <button
        onClick={() => onAddToCart(product.id)}
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDisplay;