import React from "react";
import Card from "./Card";

const CardList = ({ seedlings }) => {
  return (
    <div>
      {seedlings.map((user, i) => {
        return (
          <Card
            key={seedlings[i].id}
            image={seedlings[i].image}
            name={seedlings[i].name}
          />
        );
      })}
    </div>
  );
};

export default CardList;
