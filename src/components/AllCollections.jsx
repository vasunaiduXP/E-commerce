import React, { useEffect } from "react";
import { products as all } from "../assets/assets";
import ZenCard from "../SharedComponents/ZenCard";
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToProducts } from "../store/cart";

export default function AllCollections({ selectedOptions }) {
  const [productData, setProductData] = React.useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    all.forEach((product) => {
      dispatch(addToProducts(product));
    });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedOptions, products]);

  const filterProducts = () => {
    const selectedCategories = Object.keys(selectedOptions).filter(
      (key) =>
        selectedOptions[key] &&
        (key === "Men" ||
          key === "Women" ||
          key === "Kids" ||
          key === "Topwear" ||
          key === "Bottomwear" ||
          key === "Winterwear")
    );

    // console.log(selectedCategories);
    // const temp = [];

    //------------------
    const filtered = products.filter((product) => {
      let categoryMatch = selectedCategories.length === 0; // Default to true if no categories selected
      if (selectedCategories.length > 0) {
        categoryMatch = selectedCategories.some(
          (category) => product.category === category
        );
      }

      let typeMatch = selectedCategories.length === 0;
      if (selectedCategories.length > 0) {
        typeMatch = selectedCategories.some(
          (type) => product.subCategory === type
        );
      }

      return categoryMatch || typeMatch;
    });
    //---------------

    // const filtered = products.filter((productt) => {
    //   let categoryMatch = selectedCategories.length === 0;
    //   typeMatch = selectedCategories.some((type) => productt.category === type);

    //   if (
    //     selectedCategories.includes(productt.category) ||
    //     selectedCategories.includes(productt.subCategory)
    //   ) {
    //     temp.push(productt);
    //   }
    // });

    setProductData(filtered);
  };

  const productz = productData.slice();

  return (
    <Box sx={{ padding: "20px", backgroundColor: "white" }}>
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          my: "20px",
        }}
      >
        <Typography variant="h4" component="div">
          All Collections
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {productz.map((product) => (
          <Grid item xs={6} md={3} key={product._id}>
            <ZenCard
              prod={product}
              CardType={"AllCollections"}
              key={product?._id}
              title={product?.name}
              image={product?.image}
              price={product?.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
