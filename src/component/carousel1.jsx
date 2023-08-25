import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevIcon from "../images/ic_chevron (1).svg";
import nextIcon from "../images/ic_chevron.svg";
import { CustomerOrder } from "./customerOrder";

export default class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      currentSlide: 0,
    };
  }

  next() {
    if (this.state.currentSlide < this.props.items.length - 1) {
      this.slider.slickNext();
      this.setState((prevState) => ({
        currentSlide: prevState.currentSlide + 1,
      }));
    }
  }

  previous() {
    if (this.state.currentSlide > 0) {
      this.slider.slickPrev();
      this.setState((prevState) => ({
        currentSlide: prevState.currentSlide - 1,
      }));
    }
  }

  render() {
    const { items } = this.props;
    const settings = {
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "50px",
      slidesToShow: 2, // Display 4.5 items per slide
      speed: 500,
      rows: 4, // Display 2 rows
      slidesPerRow: 1, // Display 1 slide per row
      lazyLoad: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="header">
          <h3>Customer orders</h3>
          <div className="buttons">
            <button
              className="prev"
              onClick={this.previous}
              disabled={this.state.currentSlide === 0}>
              <img src={prevIcon} alt="prev" />
            </button>
            <button
              className="next"
              onClick={this.next}
              disabled={this.state.currentSlide === items.length - 1}>
              <img src={nextIcon} alt="next" />
            </button>
          </div>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {items.map((item) => (
            <CustomerOrder
              key={item.id}
              name={item.name}
              img={item.img}
              precentage={item.precentage}
              order={item.order}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
