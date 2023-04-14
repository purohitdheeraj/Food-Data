import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const [foodData, setFoodData] = useState({
    id: uuidv4(),
    name: "",
    type: "",
    time: ""
  });

  const [foodList, setFoodList] = useState(
    JSON.parse(window.localStorage.getItem("food-data")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("food-data", JSON.stringify(foodList));
  }, [foodList]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFoodData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoodList((prev) => [...prev, foodData]);
    console.log("data added");
  };

  return (
    <div>
      <h2>Food App</h2>
      <form onSubmit={handleSubmit} className="userform">
        Food Name:
        <input onChange={handleChange} value={foodData.name} name="name" />
        Food Type:
        <select onChange={handleChange} value={foodData.type} name="type">
          <option value="delicious">Delicious</option>
          <option value="nutritious">Nutritious</option>
          <option value="fast-food">Fast Food</option>
          <option value="beverages">Beverages</option>
          <option value="desserts">Desserts</option>
        </select>
        Food Time:
        <input onChange={handleChange} value={foodData.time} name="time" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
