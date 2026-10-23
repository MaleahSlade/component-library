// useState lets the component remember values (cart contents, alert text) between renders
import { useState } from "react";

// Reusable library components, each in its own folder
import { AlertBox } from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

// Shared TypeScript types. "import type" means they're erased at build time.
import type { User, Product } from "./types";

// Sample data: a user to show in UserProfileCard.
// Typing it as User makes TypeScript check that every required field is present.
const user: User = {
  id: "1",
  name: "Maleah Slade",
  email: "maleah@example.com",
  role: "Admin",
};

// Sample data: a product to show in ProductDisplay (typed as Product for the same reason).
const product: Product = {
  id: "p1",
  name: "Wireless Headphones",
  price: 99.99,
  description: "Noise-cancelling over-ear headphones.",
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/OMNI_image4.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  inStock: true,
};

const App = () => {
  // Text shown in the alert at the top of the page. null means no alert is visible.
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // The cart, stored as a list of product ids. Starts empty.
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Passed to ProductDisplay as onAddToCart and called with the product's id.
  // The function form of setCartItems builds on the latest cart,
  // and the spread creates a new array so React re-renders.
  const handleAddToCart = (productId: string) => {
    setCartItems((items) => [...items, productId]);
    setAlertMessage("Product added to cart!");
  };

  // Called by each Remove button with that item's position in the cart.
  // filter returns a new array without the item at indexToRemove.
  // Removing by index means duplicate products are removed one at a time.
  const handleRemoveFromCart = (indexToRemove: number) => {
    setCartItems((items) => items.filter((_, i) => i !== indexToRemove));
    setAlertMessage("Item removed from cart");
  };

  return (
    <div>
      {/* Alert banner: only rendered when there is a message.
          The close button clears the message, which hides the alert. */}
      {alertMessage && (
        <AlertBox
          type="info"
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}

      {/* Cart summary: number of items currently in the cart */}
      <p>Items in cart: {cartItems.length}</p>

      {/* Cart list: an empty-state message, or one row per item with a Remove button.
          The key combines id and index so React can tell duplicate products apart. */}
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((id, index) => (
            <li key={`${id}-${index}`}>
              {product.name}
              <button type="button" onClick={() => handleRemoveFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Main content: the two library components side by side.
          The "layout" class (components.css) arranges them in a responsive grid. */}
      <div className="layout">
        {/* Shows the user's name, plus email and role because those flags are on */}
        <UserProfileCard user={user} showEmail={true} showRole={true} />

        {/* Shows the product with description and stock status.
            Clicking Add to Cart calls handleAddToCart with the product id. */}
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

// Default export so main.tsx can import and render App
export default App;
