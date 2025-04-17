import { ProductProvider } from "./ProductContext";
import ProductList from "./ProductList";

const App = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};

export default App;
