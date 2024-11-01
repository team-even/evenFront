import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),
  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
