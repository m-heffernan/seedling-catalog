import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        //Use cloudinary for this
        src={`${image}`}
        alt={`${name}`}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
