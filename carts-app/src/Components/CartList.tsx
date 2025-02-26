import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface Carts {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  totalProducts: number;
}

function CartList() {
  const [Cart, setCarts] = useState<Carts[]>([]);

  const fetchCarts = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();
    setCarts(data.carts);
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <div>
      <h1>Cart List</h1>
      <div className="card-deck">
        {Cart.map((cart, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h2 className="card-title">Cart {cart.id}</h2>
              <p className="card-text">Products:</p>
              <div className="product-list">
                {cart.products.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ width: "50px", height: "50px" }}
                      className="img-thumbnail"
                    />
                    <strong>{product.title}</strong> - Price: ${product.price} (Quantity: {product.quantity})
                  </div>
                ))}
              </div>
              <p className="card-text">Total: {cart.total}</p>
              <p className="card-text">Discounted Total: {cart.discountedTotal}</p>
              <p className="card-text">Total Products: {cart.totalProducts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartList;
