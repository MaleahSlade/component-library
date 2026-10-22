import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";

const user: User = {
  id: "1",
  name: "Sam Rivera",
  email: "sam@example.com",
  role: "Admin",
};

const product: Product = {
  id: "p1",
  name: "Wireless Headphones",
  price: 99.99,
  description: "Noise-cancelling over-ear headphones.",
  inStock: true,
};

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard user={user} showEmail={true} showRole={true} />

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

export default App;


