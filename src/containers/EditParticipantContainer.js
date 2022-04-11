import React, { Component } from 'react'
import { Container } from "reactstrap";
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getParticipantDetail } from '../actions/participantAction'
import { putParticipantUpdate } from "../actions/participantAction";
import swal from "sweetalert";

function withNavigate(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const mapStateToProps = (state) => {
  return {
    getResponDataParticipant: state.participants.getResponDataParticipant,
    errorResponDataParticipant: state.participants.errorResponDataParticipant,
  };
};

class EditParticipantContainer extends Component {
  componentDidMount() {
    const { id } = this.props.params
    this.props.dispatch(getParticipantDetail(id))
  }

  handleSubmit(data) {
    console.log(data)
    const { id } = this.props.params
    this.props.dispatch(putParticipantUpdate(data, id))
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
          "Failed update participant!",
          "",
          "error"
        );
      } else {
        swal(
          "Participant updated!",
          "",
          "success"
        );
      }
    }

    return (
      <Container>
        <BackComponent />
        <h1>Update Participant</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default  withNavigate(connect(mapStateToProps, null)(withParams(EditParticipantContainer)))

