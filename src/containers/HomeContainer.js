import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { connect } from "react-redux";
import { deleteDataParticipant, getParticipantsList } from '../actions/participantAction'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getParticipantsList())
    this.props.dispatch(deleteDataParticipant())
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    )
  }
}

export default connect()(HomeContainer);