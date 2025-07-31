import {
  createContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = useCallback(
    (itemId) => {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }
    },
    [cartItems]
  );

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }, []);

  const getTotalCartAmount = useCallback(() => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount = totalAmount + itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  }, [cartItems]);

  const contextValue = useMemo(
    () => ({
      food_list,
      cartItems,
      addToCart,
      removeFromCart,
      setCartItems,
      getTotalCartAmount,
    }),
    [addToCart, removeFromCart, cartItems, setCartItems, getTotalCartAmount]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
