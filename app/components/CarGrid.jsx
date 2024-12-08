import Card from "./Card";
import { carArray } from "./data";

import React from "react";

export default function CarGrid() {
  return (
    <div>
      {carArray.map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-4 grid-rows-3 gap-3">
            <Card  />
          </div>
        ); //Handle THIS GRID STUFF
      })}
    </div>
  );
}
