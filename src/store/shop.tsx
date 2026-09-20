import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/data/products";

export interface CartLine {
  id: string;
  qty: number;
}

type Drawer = "cart" | "wishlist" | "search" | null;

interface ShopContextValue {
  cart: CartLine[];
  wishlist: string[];
  cartCount: number;
  cartTotal: number;
  cartLines: Array<{ product: Product; qty: number }>;
  addToCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  wishlistProducts: Product[];
  drawer: Drawer;
  openDrawer: (d: Drawer) => void;
  closeDrawer: () => void;
  hydrated: boolean;
}

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "amma-cart-v1";
const WISH_KEY = "amma-wishlist-v1";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [drawer, setDrawer] = useState<Drawer>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(read<CartLine[]>(CART_KEY, []));
    setWishlist(read<string[]>(WISH_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const addToCart = useCallback((id: string) => {
    setCart((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { id, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
  }, []);

  const cartLines = useMemo(
    () =>
      cart
        .map((l) => {
          const product = getProduct(l.id);
          return product ? { product, qty: l.qty } : null;
        })
        .filter((l): l is { product: Product; qty: number } => l !== null),
    [cart],
  );

  const value: ShopContextValue = {
    cart,
    wishlist,
    cartCount: cart.reduce((n, l) => n + l.qty, 0),
    cartTotal: cartLines.reduce((sum, l) => sum + (l.product.price ?? 0) * l.qty, 0),
    cartLines,
    addToCart,
    setQty,
    removeFromCart,
    clearCart: () => setCart([]),
    toggleWishlist,
    isWishlisted: (id: string) => wishlist.includes(id),
    wishlistProducts: wishlist.map((id) => getProduct(id)).filter((p): p is Product => Boolean(p)),
    drawer,
    openDrawer: setDrawer,
    closeDrawer: () => setDrawer(null),
    hydrated,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
