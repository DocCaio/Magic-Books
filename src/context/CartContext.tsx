import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { Book, CartItem } from '../types/Books';

type State = { items: Record<number, CartItem> };
type Action =
  | { type: 'ADD'; book: Book }
  | { type: 'REMOVE'; id: number }
  | { type: 'CHANGE_QTY'; id: number; delta: number }
  | { type: 'CLEAR' };

function reducer(state: State, action: Action): State {
  const { items } = state;

  switch (action.type) {
    case 'ADD':
      if (items[action.book.id]) return state;
      return { items: { ...items, [action.book.id]: { ...action.book, qty: 1 } } };

    case 'REMOVE': {
      const { [action.id]: _, ...rest } = items;
      return { items: rest };
    }

    case 'CHANGE_QTY': {
      const item = items[action.id];
      if (!item) return state;
      const newQty = item.qty + action.delta;
      if (newQty <= 0) {
        const { [action.id]: _, ...rest } = items;
        return { items: rest };
      }
      return { items: { ...items, [action.id]: { ...item, qty: newQty } } };
    }

    case 'CLEAR':
      return { items: {} };

    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (book: Book) => void;
  removeFromCart: (id: number) => void;
  changeQty: (id: number, delta: number) => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: {} });

  const items = Object.values(state.items);
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      items,
      totalItems,
      totalPrice,
      addToCart:     (book) => dispatch({ type: 'ADD', book }),
      removeFromCart:(id)   => dispatch({ type: 'REMOVE', id }),
      changeQty:     (id, delta) => dispatch({ type: 'CHANGE_QTY', id, delta }),
      clearCart:     ()    => dispatch({ type: 'CLEAR' }),
      isInCart:      (id)  => !!state.items[id],
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart deve ser usado dentro de <CartProvider>');
  return ctx;
}