
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
     <nav className="bg-green-600 p-4 text-white flex justify-between">
      {/* <h1 className="text-xxl font-bold"> VegiShop</h1> */}
       <div className="flex items-center space-x-2">
        <span className="text-3xl">🌽</span>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          VegiShop
        </h1>
      </div>
      <div className="space-x-4 text-2xl">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  )
}
