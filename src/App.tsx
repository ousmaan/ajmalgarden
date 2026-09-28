import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import { WishlistProvider } from "./lib/wishlist";
import { LanguageProvider } from "./i18n/lang";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import Wishlist from "./pages/Wishlist";
import Identify from "./pages/Identify";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * Forward-compat: old HashRouter links shared as `/#/products` now land on
 * real paths. Plain anchors (`#bonsai`) pass through to ScrollManager.
 */
function HashCompat() {
  const navigate = useNavigate();
  useEffect(() => {
    const match = window.location.hash.match(/^#(\/[^#]*)(#.*)?$/);
    if (match) navigate(`${match[1]}${match[2] ?? ""}`, { replace: true });
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <LanguageProvider>
        <WishlistProvider>
          <HashCompat />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
              <Route path="/catalog/:categoryId/:productId" element={<ProductDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/identify" element={<Identify />} />
              {/* Layman-friendly alias — same page, plan IA naming. */}
              <Route path="/plant-finder" element={<Identify />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </WishlistProvider>
        </LanguageProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
