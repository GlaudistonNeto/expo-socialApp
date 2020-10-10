import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";

import { UserContext } from "../../context/UserContext";

import Text from "../../component/Text";

export default LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);

  useEffect(() => {
    setTimeout(async () => {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }, 500);
  }, []);

  return (
    <Container>
      <Text title color="#FFF">
        SocialApp
      </Text>

      <LottieView
        source={require("../assets/loading-animation.json")}
        autoPlay
        loop
        style={{ width: "100%" }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222;
`;