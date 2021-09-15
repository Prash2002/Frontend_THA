import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import prodStore from "../mobx/ProductsStore";
import Item from "./Item";

const ShopHome = () => {
  return (
    <Box mt={100}>
      <Flex
        wrap="wrap"
        // alignItems="center"
        justifyContent="center"
      >
        {prodStore.products.map((item, index) => {
          // console.log("uou " + item.title);

          return <Item i={index} key={index}></Item>;
        })}
      </Flex>
    </Box>
  );
};

const observeShop = observer(ShopHome);

export default observeShop;
