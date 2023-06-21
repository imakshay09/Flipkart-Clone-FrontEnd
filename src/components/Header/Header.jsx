import React from "react";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
//the tyled is used to overcome the default css of the component which is given ans parameter
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PluseImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});


const CustomButtonWrapper = styled(Box)`
  margin:0 5% 0 auto;
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <header>
      <StyledHeader>
        <Toolbar style={{ minHeight: "55px" }}>
          <Component>
            <img
              src={logoURL}
              style={{
                width: "75px",
              }}
              alt="logo"
            />
            <Box style={{ display: "flex" }}>
              <Subheading>
                Explore&nbsp;{" "}
                <Box component="span" style={{ color: "#ffe500" }}>
                  Pluse
                </Box>
              </Subheading>
              <PluseImage src={subURL} alt="sublogo" />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </header>
  );
};

export default Header;
