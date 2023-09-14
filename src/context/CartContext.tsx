'use client';
import React, {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Product = {
  thumbnail: string;
  name: string;
  offer_price: string;
  price: string;
  qty: number;
  checked?: boolean;
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
  itemCount: number;
  savingAmount: number;
  toggleCheckProduct: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  isCartOpen?: boolean | any;
  setIsCartOpen?: any;
};

export const CartContext = createContext<CartContextValue>({
  cartItem: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: (index: number) => {},
  toggleCheckProduct: (index: number) => {},
  decreaseQuantity: (index: number) => {},
  totalPrice: 0,
  savingAmount: 0,
  itemCount: 0,
});

// Create a custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

type CartProviderProps = { children: ReactNode };

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItem, setCartItem] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [itemCount, setItemCount] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    const existingProduct = cartItem.find(
      (p) =>
        p.thumbnail === product.thumbnail &&
        p.name === product.name &&
        p.price === product.price &&
        p.offer_price === product.offer_price
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
      setCartItem((prevCart) => [
        ...prevCart,
        { ...product, qty: 1, checked: true },
      ]);
    }
  };
  const removeFromCart = (index: number) => {
    const newCart = cartItem.filter((product, i) => i !== index);
    setCartItem(newCart);
  };

  const toggleCheckProduct = (index: number) => {
    const tempArr = [...cartItem];
    tempArr[index].checked = !tempArr[index].checked;
    setCartItem(tempArr);
  };

  useEffect(() => {
    const totalPrc = cartItem.reduce(
      (total, product) =>
        product.checked
          ? total +
            Number(product.offer_price ? product.offer_price : product.price) *
              product.qty
          : total,
      0
    );
    const savingPrc = cartItem.reduce(
      (total, product) =>
        product.checked
          ? total +
            (Number(product.price) * product.qty -
              Number(
                product.offer_price ? product.offer_price : product.price
              ) *
                product.qty)
          : total,
      0
    );
    let tempTotalCount = 0;
    let tempUncheckedCount = 0;
    cartItem.forEach((element) => {
      tempTotalCount = tempTotalCount + element.qty;
      if (!element.checked) {
        tempUncheckedCount = tempUncheckedCount + element.qty;
      }
    });
    setSavingAmount(savingPrc);
    setItemCount(tempTotalCount - tempUncheckedCount);
    setTotalPrice(totalPrc);
  }, [cartItem]);

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
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        isCartOpen,
        itemCount,
        setIsCartOpen,
        toggleCheckProduct,
        savingAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

