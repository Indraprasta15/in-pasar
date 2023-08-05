import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Produk from "../pages/produk";
import Checkout from "../pages/checkout";
import Keranjang from "../pages/keranjang";
import Kontak from "../pages/kontak";
import ProdukDetil from "../pages/produk_detil";
import Tentang from "../pages/tentang";
import Transaksi from "../pages/transaksi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produk",
    element: <Produk />,
  },
  {
    path: "/produk/:url",
    element: <ProdukDetil />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/keranjang",
    element: <Keranjang />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/transaksi",
    element: <Transaksi />,
  },
]);

function Routes() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Routes;
