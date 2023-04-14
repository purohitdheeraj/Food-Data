import React, { useState } from "react";

const UserForm = () => {
  const [foodData, setFoodData] = useState(
    JSON.parse(window.localStorage.getItem("food-data")) || []
  );

  const foodItemEl = foodData.map((item) => {
    return (
      <div key={item.id} className="food-item">
        <h2>{item.name}</h2>
        <p>{item.type}</p>
        <p>Time: {item.time}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Food Data here</h2>
      <div className="container">{foodItemEl}</div>
    </div>
  );
};

export default UserForm;
