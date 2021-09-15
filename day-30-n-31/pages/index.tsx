import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ShopHome from "../components/ShopHome";
import prodStore from "../mobx/ProductsStore";
const Home: NextPage = () => {
  console.log(prodStore.products);
  console.log(prodStore.products.length);

  return <ShopHome />;
};

export default Home;
