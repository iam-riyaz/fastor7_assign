import { Box, Container, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const Product = () => {
  const name = localStorage.getItem("name");
  const rating= localStorage.getItem("rating");
  const address = localStorage.getItem("address");
  const image = localStorage.getItem("image");
  console.log({ name });
  return (
    <Container component="main"   sx={{ marginTop: "70px", padding:"0px"}}>
      <Box sx={{width:"100%"}}>
        <Box
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",

            backgroundSize: "cover",
            height: "300px",
            width:"100%"
          }}
        >
          
        </Box>
      </Box>
      <Typography sx={{ textAlign: "left" }} variant="h4" component="h3">
        {name}
      </Typography>
     
      
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <Typography  sx={{ textAlign: "left", fontWeight:"normal" }} variant="p" component="h3" >
        {address}
      </Typography>
      <div style={{display:"flex", alignItems:"center"}} >
      <StarIcon sx={{ width: "14px", color: "#181818ce" }} />
      <Typography>
      {rating}
      </Typography>
      </div>
      </div>

      <p style={{textAlign:"left", fontSize:"14px"}}>Our delicate vanilla cake swirled with chocolate
and filled with mocha chocolate chip cream and a
layer of dark chocolate ganache</p>

      
    </Container>
  );
};
