

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";


export const RestroCard = ({ image, name, rating, cost, address }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        localStorage.setItem("name", name);
        localStorage.setItem("image", image);
        localStorage.setItem("rating", rating);
        localStorage.setItem("address", address);
       

        navigate("/product");
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "150px",
        mt: 1,
        pl: 1,
        cursor: "pointer",
        boxShadow: "none",
        "&:hover": {
          "box-shadow":
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, borderRadius: "10px" }}
        image={image}
        alt="restaurant image"
      />
      <Box sx={{ height: 120 }}>
        <CardContent sx={{ paddingTop: "0px" }}>
          <Box>
            <Typography
              component="h4"
              sx={{
                textAlign: "left",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#3f4141",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                textAlign: "left",
                fontWeight: "bold",
                color: "#3f4141a9",
              }}
            >
              {" "}
              {address}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box sx={{ display: "flex", marginBottom: "0px" }}>
                <StarIcon sx={{ width: "14px", color: "#181818ce" }} />
                {rating}
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginBottom: "0px" }}>
              <AttachMoneyIcon sx={{ width: "16px" }} />
              {cost}
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
