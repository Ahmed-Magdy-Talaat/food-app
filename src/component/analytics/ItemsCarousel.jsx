import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import editIcon from "../../images/Edit.svg";
import plusIcon from "../../images/Plus 24px.svg";
import prevIcon from "../../images/ic_chevron (1).svg";
import nextIcon from "../../images/ic_chevron.svg";
import Statistics from "./Statistics";
import AnModal from "./AnModal";

export default function ItemsCarousel({ items, onDelete, onUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [editedIndex, setEdit] = useState(null);
  const slideRef = useRef(null);

  const next = () => {
    if (currentSlide < items.length - 1) {
      slideRef.current.slickNext();
      setCurrentSlide((prevstate) => prevstate + 1);
    }
  };

  const previous = () => {
    if (currentSlide > 0) {
      slideRef.current.slickPrev();
      setCurrentSlide((prevstate) => prevstate - 1);
    }
  };

  const handleEditClick = (index) => {
    setEdit(index);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setEdit(null);
    setIsOpen(true);
  };
  const isNextButtonDisabled = () => {
    // Calculate the number of visible slides based on the screen width
    const screenWidth = window.innerWidth;
    let visibleSlides;
    if (screenWidth >= 1024) {
      visibleSlides = 4.5;
    } else if (screenWidth >= 600) {
      visibleSlides = 3;
    } else if (screenWidth >= 480) {
      visibleSlides = 2;
    } else {
      visibleSlides = 1;
    }

    return currentSlide >= items.length - visibleSlides;
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 4.5, // Display 4.5 items per slide
    speed: 500,
    rows: 2, // Display 2 rows
    slidesPerRow: 1, // Display 1 slide per row
    lazyLoad: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="all-in">
      <Statistics />
      <div className="title">
        <div>Dishes</div>
        <div className="buttons">
          <button
            className="prev"
            onClick={previous}
            disabled={currentSlide === 0}
          >
            <img src={prevIcon} alt="prev"></img>
          </button>
          <button
            className="next"
            onClick={next}
            disabled={isNextButtonDisabled()}
          >
            <img src={nextIcon} alt="next"></img>
          </button>
        </div>
      </div>
      <div className="main">
        <Slider ref={slideRef} {...settings} className=".container">
          {/* <div className="container"> */}
          <div key={0}>
            <div className="food-item">
              <button className="btnPlus" onClick={() => handleAdd()}>
                <img className="plus" src={plusIcon} alt="plus"></img>
              </button>

              <div>Add new dish</div>
            </div>
          </div>

          {items.map((element, index) => (
            <div key={index + 1}>
              <div className="food-item">
                <div>
                  <img src={element.imageUrl} alt={element.name} />
                </div>
                <div></div>
                <div>{element.name}</div>
                <div className="item-details">
                  <div className="price">{element.price}</div>
                  <div className="stat">{element.status}</div>
                </div>

                <div className="edit" onClick={() => handleEditClick(index)}>
                  <div className="icon">
                    <img src={editIcon} alt="edit"></img>
                  </div>
                  <div className="word">Edit dish</div>
                </div>

                <button
                  className="delete-button"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {isOpen && (
        <AnModal
          close={() => setIsOpen(false)}
          items={items}
          index={editedIndex}
          onUpdateItems={onUpdate}
        />
      )}
    </div>
  );
}
