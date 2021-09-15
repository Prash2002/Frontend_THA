import React from "react";
import prodStore, { Product } from "../mobx/ProductsStore";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Center,
  IconButton,
} from "@chakra-ui/react";
import {
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsHeartFill,
  BsHeart,
} from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { observer } from "mobx-react-lite";

function Rating({
  rating,
  numReviews,
}: {
  rating: number;
  numReviews: number;
}) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function Item({ i }: { i: number }) {
  const x: Array<Product> = JSON.parse(
    window.localStorage.getItem("products") || "[]"
  );
  return (
    <Flex p={50} w="350px" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        // maxW="sm"
        width="300px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Center>
          <Image
            src={x[i].image}
            alt={`Picture of ${x[i].title}`}
            roundedTop="lg"
          />
        </Center>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {/* <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge> */}

            <IconButton
              aria-label="Wishlist"
              icon={
                <Icon
                  as={prodStore.wishlist?.has(i) ? BsHeartFill : BsHeart}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                />
              }
              onClick={() => {
                if (prodStore.wishlist?.has(i)) {
                  prodStore.wishlist?.delete(i);
                } else {
                  prodStore.wishlist?.set(i, 1);
                }
                localStorage.setItem(
                  "wishlist",
                  JSON.stringify(prodStore.wishlist)
                );
                // prodStore.products[i].wish = !prodStore.products[i].wish;
                // JSON.stringify(localStorage.setItem("products"));
                //   !JSON.parse(localStorage.getItem("products") || "[]")[i].wish;
              }}
            />
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {x[i].title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={x[i].rating.rate} numReviews={x[i].rating.count} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {x[i].price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

const obeserveItem = observer(Item);

export default obeserveItem;
