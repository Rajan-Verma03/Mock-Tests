import { Container } from "@material-ui/core";
import React from "react";
import TestScreen from "./TestScreen";

const HomeScreen = () => {
  return (
    <>
      <Container fixed>
        <TestScreen />
      </Container>
    </>
  );
};

export default HomeScreen;
