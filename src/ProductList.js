import { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  const { loading, products } = useContext(ProductContext);

  // Burada filter, sort ve map işlemleri yapılacak
  const product = products
    .filter((item) => {
      return item.price < 100;
    })
    .sort((a, b) => {
      return a.price - b.price;
    })
    .map((item) => {
      return (
        <li key={item.id}>
          {item.title} - {item.price}
        </li>
      );
    });

  return <ul>{product}</ul>;
};

export default ProductList;
