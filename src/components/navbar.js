import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produk">Produk</Link>
        </li>
        <li>
          <Link to="/transaksi">Transaksi</Link>
        </li>
        <li>
          <Link to="/kontak">Kontak</Link>
        </li>
        <li>
          <Link to="/tentang">Tentang</Link>
        </li>
        <li>
          <Link to="/keranjang">Keranjang</Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
