import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { connect } from "react-redux";
import {Container, Row, Col} from 'styled-bootstrap-grid';
import {Img} from './carouselStyle';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        {
          src: window.location.href + "images/placeholder/select.png",
          altText: "Carousel",
          caption: ""
        }
      ],
      images: [],
      activeIndex: 0
    };
  }

  componentDidMount() {
    console.log("Props", this.props);
    console.log("State", this.state);
  }

  componentWillReceiveProps() {
    this.goToIndex(0);
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.dataReducer.images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.dataReducer.images.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const slides = this.props.dataReducer.images.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={(item.caption).toString()}
            captionHeader={(item.caption).toString()}
          />
        </CarouselItem>
      );
    });

    return (
      <Container>
        <Row>
          {this.props.dataReducer.currentNumber == 0 && (
            <Col md={8} mdOffset={2}>
              <UncontrolledCarousel autoPlay={false} items={this.state.img} />
            </Col>
          )}
          {this.props.dataReducer.currentNumber > 0 && (
            <Col md={8} mdOffset={2}>
              <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  items={this.props.dataReducer.images}
                  activeIndex={this.state.activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer
  };
};

export default connect(mapStateToProps)(ImageCarousel);
