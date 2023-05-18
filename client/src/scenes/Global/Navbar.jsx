import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  ShoppingBagOutlined,
  PersonOutline,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { shades } from "../../Theme";

const Navbar = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="60px"
        backgroundColor="rgba(225, 225,225,0.95)"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
      >
        <Box
          width="80%"
          display="flex"
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            onClick={() => {
              a;
              navigate("/");
            }}
            sx={{ "&:hover": { cursor: "pointer" } }}
            color={shades.secondary[500]}
          >
            TEESHOP
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            columnGap="20px"
            zIndex="2 "
          >
            <IconButton sx={{ color: "black" }}>
              <SearchOutlined />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <PersonOutline />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <ShoppingBagOutlined />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
