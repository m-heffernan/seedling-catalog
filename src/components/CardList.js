import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            image={robots[i].image}
            name={robots[i].name}
          />
        );
      })}
    </div>
  );
};

export default CardList;
