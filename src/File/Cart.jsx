import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Cartslice';

const Cart = () => {
    const cartitems = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(remove(id));
    }

  return (
    <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 justify-center p-5">
                {
                    cartitems.map((product,index)=>(
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
                                onClick={() => removeItem(product.id)}
                                className="bg-blue-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-700 transition-colors duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                    ))
                }

        </div>

    
    </>
  )
}

export default Cart