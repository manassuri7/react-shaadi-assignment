import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { Container, Row } from "styled-bootstrap-grid";
import { Coloumn, Div, DivTextCenter } from "./finishStyle";

class Finish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  printNumberHitory = () => {
    var text = "";
    var items = this.props.dataReducer.items;
    if (items == undefined) {
      return text;
    }
    var totallength = items.length - 1;
    items.forEach(function(item, index) {
      if (totallength != index) {
        text += item + ", ";
      } else {
        text += item + ".";
      }
    });
    return text;
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Coloumn md={12}>
              <DivTextCenter>
                <Button color="danger" onClick={this.toggle}>
                  Finish
                </Button>
              </DivTextCenter>
            </Coloumn>
          </Row>
        </Container>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Carousel Selection History
          </ModalHeader>
          <ModalBody>
            {(!this.props.dataReducer.items ||
              this.props.dataReducer.items.length > 0) && (
              <Div>Numbers selected: {this.printNumberHitory()}</Div>
            )}
            {(!this.props.dataReducer.items ||
              this.props.dataReducer.items.length == 0) && (
              <Div>No History Found.</Div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer
  };
};

export default connect(mapStateToProps)(Finish);
