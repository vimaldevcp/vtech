"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const update = async (id: string, price: number) => {
    await fetch("/api/admin/products", {
      method: "PUT",
      body: JSON.stringify({ id, price }),
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {products.map((p: any) => (
        <div key={p._id}>
          {p.name}
          <input
            defaultValue={p.price}
            onBlur={(e) => update(p._id, +e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}