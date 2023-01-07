import React from "react";
import photo from "../../assets/small/commercial/0.jpg";

function PhotoList() {
  return (
    <div>
      <img
        src={photo}
        alt="Commercial Example"
        className="img-thumbnail mx-1"
      />
    </div>
  );
}

export default PhotoList;
