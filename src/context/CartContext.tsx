"use client";
import React, { FC, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type Product = {
  img: string;
  text: string;
  salePrice: string;
  price: string;
  qty: number;
  variant: [
    {
      size: string[];
    },
    {
      fit: string[];
    },
    {
      color: string[];
    },
  ];
};

type CartContextValue = {
  cartItem: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  totalPrice: number;
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  isCartOpen?: boolean|any;
  setIsCartOpen?: any;
};

const CartContext = createContext<CartContextValue>({
  cartItem: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: (index: number) => {},
  decreaseQuantity: (index: number) => {},
  totalPrice: 0,
});

// Create a custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

type CartProviderProps={children:ReactNode}

export const CartProvider:FC<CartProviderProps> = ({ children } ) => {
  const [cartItem, setCartItem] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    console.log("context addToCart", product);
    const existingProduct = cartItem.find(
      (p) =>
        p.img === product.img &&
        p.text === product.text &&
        p.price === product.price
        // p.salePrice === product.salePrice &&
      // p.variant[0].size === product.variant[0].size &&
      // p.variant[1].fit === product.variant[1].fit &&
      // p.variant[2].color === product.variant[2].color
    );
    if (existingProduct) {
      // If it does, increment its qty by one
      existingProduct.qty++;
      setCartItem((prevCart) =>
        prevCart.map((p) => (p === existingProduct ? existingProduct : p))
      );
    } else {
      setCartItem((prevCart) => [...prevCart, { ...product, qty: 1 }]);
    }
  };
  const removeFromCart = (index: number) => {
    const newCart = cartItem.filter((product, i) => i !== index);
    setCartItem(newCart);
  };
  
  useEffect(() => {
  const totalPrc = cartItem.reduce(
    (total, product) => (total + Number(product.salePrice ? product.salePrice : product.price) * product.qty),
    0
  );
  setTotalPrice(totalPrc);
  },[cartItem])

  const increaseQuantity = (index: number) => {
    const product = cartItem[index];
    if (product) {
      product.qty++;
      setCartItem((prevCart) =>
        prevCart.map((p, i) => (i === index ? product : p))
      );
    }
  };
  const decreaseQuantity = (index: number) => {
    const product = cartItem[index];
    if (product && product.qty > 0) {
      product.qty--;
      setCartItem((prevCart) =>
        prevCart.map((p, i) => (i === index ? product : p))
      );
    }
  };


  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
