import React, { useState } from "react";
import "../../App.css";
import "../../css/Analytics.css";
import ItemsCarousel from "../../component/analytics/ItemsCarousel";
import pizzaImage from "../../images/pizza-3007395_1280.jpg";
import burgerImage from "../../images/Burger-and-Fries.jpg";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";

export default function Analystic() {
  const [Dishes, setDishes] = useState([
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },

    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    // ... add more food items here
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    // ... add more food items here
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Pizza",
      price: "2.29$",
      status: "in stock",
      imageUrl: pizzaImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
    {
      name: "Burger",
      price: "1.99$",
      status: "in stock",
      imageUrl: burgerImage,
    },
  ]);

  const handleDelete = (index) => {
    const updatedItems = [...Dishes];
    updatedItems.splice(index, 1);
    setDishes(updatedItems);
  };
  const handleUpdateItems = (newItems) => {
    setDishes(newItems);
  };

  return (
    <>
      <div className="an-contain">
        {/* <Statistics /> */}
        <ItemsCarousel
          items={Dishes}
          onDelete={handleDelete}
          onUpdate={handleUpdateItems}
        />
      </div>
    </>
  );
}
