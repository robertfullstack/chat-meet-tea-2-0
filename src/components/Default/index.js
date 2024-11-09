import React from "react";
import * as C from "./styles";
import LogoTEA from '../icons/LogoTEA.png';

const Default = () => {
  return (
    <C.Container>
      <div>
        <img src={LogoTEA} alt="Logo Meet Tea"  width="100%" height="200px"/>
      </div>
      <C.Title>Chat Meet Tea</C.Title>
      <C.Info>
        Seja bem vindo(a) ao chat Meet Tea!
      </C.Info>
    </C.Container>
  );
};

export default Default;
