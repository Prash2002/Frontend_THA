import { Box, Flex } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import React from "react";
// import Item from "../components/Item";
import prodStore, { Product } from "../mobx/ProductsStore";
import dynamic from "next/dynamic";

const DynamicItem = dynamic(() => import("../components/Item"));

const wishlist = () => {
  var ar: number[] = [];
  prodStore.wishlist.forEach((value, key) => {
    // console.log(key);
    const x: Array<Product> = JSON.parse(
      window.localStorage.getItem("products") || "[]"
    );
    console.log(x);

    console.log("len" + x.length);
    // return <Item i={key} key={key} />;
    // return <div>key</div>;
    ar.push(key);
  });
  // const map = new Map<number, number>(prodStore.wishlist);
  // console.log(map);

  return (
    <Box mt={100}>
      <Flex
        wrap="wrap"
        // alignItems="center"
        justifyContent="center"
      >
        {ar.map((key) => {
          console.log(key);

          return <DynamicItem i={key} key={key} />;
        })}
      </Flex>
    </Box>
  );
};

const observewish = observer(wishlist);
export default observewish;
