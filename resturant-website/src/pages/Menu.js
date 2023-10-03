import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../data/Data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", margin: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.names}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.names}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                {/* <Typography
                  variant="h6"
                  component={"div"}
                  sx={{ fontSize: "20px" }}
                >
                  Item Price : {menu.price}
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
