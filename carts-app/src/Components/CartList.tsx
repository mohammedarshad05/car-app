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
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();
        setCarts(data.carts);
    };

    useEffect(() => {
        fetchCarts();
    }, []);

    return (
        <div>
            <h1>Cart List</h1>
            <ul>
                {Cart.map((cart, index) => (
                    <li key={index}>
                        <h2>Cart {cart.id}</h2>
                        <p>Products:</p>
                        <ul>
                            {cart.products.map((product) => (
                                <li key={product.id}>
                                    
            <img src={product.thumbnail} alt={product.title} style={{ width: '50px', height: '50px' }} />
            <strong>{product.title}</strong> - Price: ${product.price} (Quantity: {product.quantity})

                                </li>
                            ))}
                        </ul>


                        <p>Total: {cart.total}</p>
                        <p>Discounted Total: {cart.discountedTotal}</p>
                        <p>Total Products: {cart.totalProducts}</p>
                    </li>
                ))}


            </ul>
        </div>

    )

}
export default CartList;
