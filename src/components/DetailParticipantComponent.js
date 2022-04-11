import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import dateFormat from "dateformat";

const mapStateToProps = (state) => {
  return {
    getParticipantDetail: state.participants.getParticipantDetail,
    errorParticipantDetail: state.participants.errorParticipantDetail,
  };
};

const DetailParticipantComponent = (props) => {

  if (!props.getParticipantDetail) return null
  
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Full Name</td>
          <td width="10">:</td>
          <td>{props.getParticipantDetail.data.full_name}</td>
        </tr>
        <tr>
          <td width="200">Business Name</td>
          <td width="10">:</td>
          <td>{props.getParticipantDetail.data.business_name}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td>{props.getParticipantDetail.data.email}</td>
        </tr>
        <tr>
          <td width="200">Phone Number</td>
          <td width="10">:</td>
          <td>{props.getParticipantDetail.data.phone_number}</td>
        </tr>
        <tr>
          <td width="200">Status Print Certificate</td>
          <td width="10">:</td>
          <td>
            {props.getParticipantDetail.data.is_print_certificate ? (
              <>Yes</>
            ) : (
              <>No</>
            )}
          </td>
        </tr>
        <tr>
          <td width="200">Status Print Name Tag</td>
          <td width="10">:</td>
          <td>
            {props.getParticipantDetail.data.is_print_name_tag ? <>Yes</> : <>No</>}
          </td>
        </tr>
        <tr>
          <td width="200">Created At</td>
          <td width="10">:</td>
          <td>
            {dateFormat(
              props.getParticipantDetail.data.created_at,
              "dddd, mmmm dS, yyyy"
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailParticipantComponent);
