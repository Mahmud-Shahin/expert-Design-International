import React from "react";
import Info from "./../Home/Info";
import RemovalServices from "./RemovalServices/RemovalServices";
import ClippingPathBanner from "./ClippingPathBanner";

const ClippingPath = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <ClippingPathBanner></ClippingPathBanner>
      <Info></Info>
      <RemovalServices></RemovalServices>
    </div>
  );
};

export default ClippingPath;
