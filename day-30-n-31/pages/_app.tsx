import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import prodStore from "../mobx/ProductsStore";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // console.log(window.localStorage);
    if (!window.localStorage.getItem("products")) {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);

          prodStore.addProduct(
            JSON.parse(localStorage.getItem("products") || "[]")
          );
          localStorage.setItem("products", JSON.stringify(prodStore.products));
          // prodStore.addProduct(json);
          // localStorage.setItem("products", JSON.stringify(prodStore.products));
        });
    } else {
      prodStore.addProduct(
        JSON.parse(localStorage.getItem("products") || "[]")
      );
    }

    // return () => {
    //     cleanup
    // }
  }, []);
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
