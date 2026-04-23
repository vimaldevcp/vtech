export default function ProductCard({ product }: any) {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} className="h-40 w-full object-cover" />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
    </div>
  );
}