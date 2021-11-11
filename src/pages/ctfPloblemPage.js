import React from "react";
import CtfTemplete from "../components/ctfPloblem/ctfTemplete";
import CtfProviders from "../providers/CtfProviders";

const ctfPloblemPage = ({match}) => {
  return(
    <CtfProviders>
      <CtfTemplete id={match.params.id}/>
    </CtfProviders>
  );
};

export default ctfPloblemPage;