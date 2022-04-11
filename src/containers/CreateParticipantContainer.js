import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { deleteDataParticipant, postParticipantCreate } from "../actions/participantAction";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";

function withNavigate(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

const mapStateToProps = (state) => {
  return {
    getResponDataParticipant: state.participants.getResponDataParticipant,
    errorResponDataParticipant: state.participants.errorResponDataParticipant,
  };
};

class CreateParticipantContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postParticipantCreate(data))
    this.props.dispatch(deleteDataParticipant())
  }

  componentDidUpdate(){
    if (this.props.getResponDataParticipant){
      setTimeout(this.props.navigate('/'), 2000);
      ;
    }
  }

  render() {
    if (this.props.getResponDataParticipant || this.props.errorResponDataParticipant) {
      if (this.props.errorResponDataParticipant) {
        swal(
          "Failed create participant!",
          "",
          "error"
        );
      } else {
        swal(
          "Participant ureated!",
          "",
          "success"
        );
      }
    }

    return (
      <Container>
        <BackComponent />
        <h1>Create Participant</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default  withNavigate(connect(mapStateToProps, null)(CreateParticipantContainer))
