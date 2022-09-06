import Card from "./Card";
import product from "../data/Data";

const Products = () => {
  return (
    <div>
      <h2>Product Page</h2>

      {product.map((pro) => (
        <Card
          key={pro.id}
          name={pro.name}
          price={pro.price}
          title={pro.title}
        />
      ))}
    </div>
  );
};

export default Products;
