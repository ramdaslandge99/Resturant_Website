import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          textAlign: "center",
          padding: 2,

          "& h4": {
            fontWeight: "bold",
            my: 2,
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,

            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to SARA Resturant</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus a
          voluptatem porro amet, accusamus quam numquam pariatur aliquam unde
          repellat, molestiae sint itaque laborum quod quo laboriosam assumenda
          mollitia enim dicta atque nisi provident architecto sapiente. Nam
          aliquam labore doloribus expedita numquam in, ducimus cumque nostrum
          sed sit dicta sunt, veritatis inventore dolor. Corrupti cupiditate
          perferendis at ab iusto consequatur veritatis culpa alias. Mollitia
          quas dolorum amet veritatis blanditiis architecto fugit quidem aperiam
          ratione totam. Porro eligendi sit vero libero commodi eveniet tenetur
          numquam deserunt itaque id dignissimos, excepturi ducimus iure
          doloremque quia laboriosam est hic incidunt ratione obcaecati quasi.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde rerum,
          laudantium eius, placeat natus, quas corporis repellat nostrum sed ea
          culpa consequuntur. Exercitationem voluptas odit rerum iure velit
          molestiae tempora dolor eligendi possimus ipsum magni eveniet
          molestias delectus sunt, quod assumenda dolores cumque sapiente
          similique odio ratione nemo nobis. Libero minus aliquam pariatur ab
          nihil maxime dicta numquam, doloremque natus fugiat enim distinctio
          corrupti dolore. Odit dolorem fugiat dolor distinctio sequi in
          deserunt earum voluptate quidem id aperiam tempore quibusdam ipsum
          eveniet accusantium necessitatibus neque corrupti nihil, totam
          incidunt culpa error. Alias, sapiente vel beatae repellat dolores
          totam praesentium in.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
