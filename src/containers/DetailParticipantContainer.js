import React, { Component } from 'react'
import { Container } from "reactstrap";
import BackComponent from '../components/BackComponent'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getParticipantDetail } from '../actions/participantAction'
import DetailParticipantComponent from '../components/DetailParticipantComponent';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class DetailParticipantContainer extends Component {

  componentDidMount() {
    const { id } = this.props.params
    this.props.dispatch(getParticipantDetail(id))
  }
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Participant </h1>
        <DetailParticipantComponent />
      </Container>
    )
  }
}

export default connect()(withParams(DetailParticipantContainer))