import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevIcon from "../images/ic_chevron (1).svg";
import nextIcon from "../images/ic_chevron.svg";
import { CustomerReview } from "./customerReview";

export default class Carousel2 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
      rows: 1, // Display 2 rows
      slidesPerRow: 1, // Display 1 slide per row
      lazyLoad: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="review-header-container">
          <div className="customer-review-header">
            <h3>Customer Review</h3>
            <p>Eum fuga consequuntur utadsjn et.</p>
          </div>
          <div className="buttons">
            <button
              className="prev"
              onClick={this.previous}
              disabled={this.state.currentSlide === 0}>
              <img src={prevIcon} alt="prev"></img>
            </button>
            <button
              className="next"
              onClick={this.next}
              disabled={this.state.currentSlide === items.length - 1}>
              <img src={nextIcon} alt="next"></img>
            </button>
          </div>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {items.map((item) => (
            <CustomerReview
              key={item.id}
              name={item.name}
              img={item.img}
              orderImg={item.orderImg}
              productRating={item.rate}
              date={item.date}
              review={item.review}
              /* style={{ margin: "0 5px" }} */
            />
          ))}
        </Slider>
      </div>
    );
  }
}
