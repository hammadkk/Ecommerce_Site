import React, { useEffect } from "react";
import { products_url } from "./data";

const initialState = {
  filtered_products: [],
  all_products: [],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
