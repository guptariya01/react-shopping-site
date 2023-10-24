import { createContext, useReducer } from "react";
import { products } from "../dummyData";
import { MyReducer } from "../src/components/Reducer/myReducer.js";

export const context = createContext();

export default function MyContext({ children }) {
  // useReducer:
  const [productList, dispatch] = useReducer(MyReducer, products);
  return (
    <context.Provider value={{ productList, dispatch }}>
      {children}
    </context.Provider>
  );
}
