import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products", {
        headers: {
          Accept: "application/json",
        },
      });
      setProducts(response.data);
      setLoading(false);
      // console.log(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(true);
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

//CUSTOM HOOK KULLANARAK DA YAPABILIRIZ FAKAT YUKARIDAKI
//CREATE CONTEXT YAPISININ EXPORTUNU KAPATMAMIZ LAZIM
// export const useProduct = () => useContext(ProductContext);
