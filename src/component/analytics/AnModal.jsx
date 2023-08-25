import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../css/AnModal.css";
import logo from "../../images/Group 36999.png";

function Modal({ close, items, index, onUpdateItems }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (index !== undefined && items[index]) {
      const { name, price, imageUrl, status } = items[index];
      setName(name);
      setPrice(price);
      // setImageUrl(imageUrl);
      setStatus(status);
      setIsEditing(true);
    }
  }, [index, items]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleImage = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage && selectedImage.type.includes("image")) {
      setImageFile(selectedImage);
      setImageUrl(URL.createObjectURL(selectedImage));
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleAdd = () => {
    const newDish = {
      name: name,
      price: price,
      status: status,
      imageUrl: imageUrl,
    };
    const updatedItems = [newDish, ...items];
    onUpdateItems(updatedItems);
    close();
  };
  const handleEdit = () => {
    const dish = items[index];
    dish.name = name;
    dish.price = price;
    dish.imageUrl = imageUrl;
    dish.status = status;
    onUpdateItems(items);
    setIsEditing(false);

    close();
  };
  return ReactDOM.createPortal(
    <>
      <div className="add-form">
        <div className="close-button" onClick={close}>
          &times;
        </div>
        <div className="logo-modal">
          <img src={logo} alt="chef" />
        </div>
        <form>
          <div className="detail">
            <label for="name">Name :</label>
            <input
              type="text"
              className="add-name"
              onChange={handleName}
              value={name}
            ></input>
          </div>
          <div className="detail">
            <label for="price">Price :</label>
            <input
              type="number"
              value={price && Number(price)}
              pattern="[0-9]*"
              className="add-price"
              onChange={handlePrice}
            ></input>
          </div>
          <div className="detail">
            <label>Status:</label>
            <div className="radio-contain">
              <div className="div-radio">
                <input
                  type="radio"
                  name="status"
                  className="radio"
                  value="in-stock"
                  checked={status === "in-stock"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label for="in-stock">In-Stock</label>
              </div>
              <div className="div-radio">
                <input
                  className="radio"
                  type="radio"
                  name="status"
                  value="out-of-stock"
                  checked={status === "out-of-stock"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label for="out-of-stock">Out of Stock</label>
              </div>
            </div>
          </div>
          <div className="detail">
            <label for="image">Dish Image :</label>
            <input type="file" accept="image/*" onChange={handleImage} />
          </div>

          <div className="modal-btns">
            <button
              type="submit"
              className="one-btn"
              onClick={isEditing ? handleEdit : handleAdd}
            >
              Submit
            </button>
            <button className="one-btn closee" onClick={close}>
              Close
            </button>
          </div>
        </form>
      </div>
      <div className="overlay"></div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
