import { createContext, useState } from "react";
import Swal from "sweetalert2"

export const CartContext = createContext()


export const CartProvider = ({children})=>{
    const[cart,setCart] = useState([])
    const addToCart = (item)=>{
        setCart([...cart, item])
    }

    const isInCart=(id)=>{
        return cart.some((item)=> item.id ===id)
    }

    const cartQuantity = ()=>{
        return cart.reduce((acc, item)=>acc + item.cantidad, 0)
    }

    const cartTotal =()=>{
        return cart.reduce((acc,item)=> acc+ item.cantidad * item.precio,0)
    }
    const emptyCart =()=>{
        Swal.fire({
            title: 'Estas seguro?',
            text: "Estas seguro que deseas vaciar el carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Seguro'
        }).then((result) => {
                if (result.isConfirmed) {
                    setCart([])
                }
        })
    }
    const removeCart= (id)=>{
        setCart(cart.filter((item)=> item.id !==id))
    }
            
    return(
            <CartContext.Provider value={{
                    cart,
                    addToCart,
                    isInCart,
                    cartQuantity,
                    cartTotal,
                    emptyCart,
                    removeCart
                }}>
                {children}
            </CartContext.Provider>

    )
}