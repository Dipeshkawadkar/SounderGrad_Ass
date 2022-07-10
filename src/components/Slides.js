import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";
// Bootstrap
import { Card, Button } from "react-bootstrap";

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.restart = this.restart.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  restart() {
    this.slider.slickGoTo(0);
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
        <h2>Previous and Next methods</h2>
        <div style={{ textAlign: "center" }}>
          <button
            data-testid="button-restart"
            className="button"
            onClick={this.restart}
          >
            Restart
          </button>
          <button
            data-testid="button-prev"
            className="button"
            onClick={this.previous}
          >
            Prev
          </button>
          <button
            data-testid="button-next"
            className="button"
            onClick={this.next}
          >
            Next
          </button>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <Card key={1}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title data-testid="title">Card Title</Card.Title>
              <Card.Text data-testid="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card key={2}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title data-testid="title">Card Title</Card.Title>
              <Card.Text data-testid="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card key={3}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title data-testid="title">Card Title</Card.Title>
              <Card.Text data-testid="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card key={4}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title data-testid="title">Card Title</Card.Title>
              <Card.Text data-testid="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card key={5}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title data-testid="title">Card Title</Card.Title>
              <Card.Text data-testid="text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Slider>
      </div>
    );
  }
}
