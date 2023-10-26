import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const imageSrc = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo as={Link} to="/">
      <Img src={imageSrc} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
