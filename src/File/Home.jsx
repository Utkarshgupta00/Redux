import React, { useState, useEffect } from 'react';
import { add } from '../redux/Cartslice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Function to handle adding a product to the cart
    const addToCart = (product) => {
        dispatch(add(product));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 justify-center p-5">
            {loading ? (
                <div className="text-center col-span-4">
                    Loading...
                </div>
            ) : (
                products.map((product, index) => (
                    <div
                        key={index}
                        className="rounded-lg bg-white shadow-lg transition-transform transform scale-100 hover:scale-105 flex flex-col justify-between items-center"
                    >
                        <img
                            className="w-full h-60 object-contain"
                            src={product.image}
                            alt={product.title}
                        />
                        <div className="p-4 text-center">
                            <p className="text-lg font-semibold text-gray-800">{product.title}</p>
                            <p className="text-xl font-bold text-blue-600 mt-2">$ {product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-blue-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-700 transition-colors duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
