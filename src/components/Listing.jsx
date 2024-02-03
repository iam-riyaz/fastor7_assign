import axios from "axios";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { RestroCard } from "./RestroCard.jsx";
import { CircularProgress } from "@mui/material";

const fetchData = async (token, setData,setIsLoading) => {
 
  setIsLoading((pre)=>!pre)
  const response = await axios.get(
    "https://staging.fastor.in/v1/m/restaurant",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  

  console.log(response.data);
  setData(response.data);
  setIsLoading((pre)=>!pre)
  
};



export const Listing = () => {
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem("authToken");
  const [isLoading,setIsLoading]= useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    

    fetchData(token, setData,setIsLoading);
    
    

  }, []);

  return (
    <Box sx={{ m: "100px 10px 50px  10px", p: "50px 10px 50px  10px" }}>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h5" color="#626363">
          Popular One
        </Typography>
      </Box>
        {isLoading? <CircularProgress/>:<div>
      {data.map((data) => {
        const address =
          data.location && data.location.city_name
            ? `${data.location.city_name}, ${data.location.state_name}`
            : "Delhi";
        return (
          <RestroCard
            image={data.images[0].url}
            name={data.restaurant_name}
            rating={data.rating.restaurant_avg_rating}
            cost={data.avg_cost_for_two}
            address={address}
          />
        );
      })}
      </div>}
    </Box>
  );
};
