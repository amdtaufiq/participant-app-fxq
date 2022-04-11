import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteParticipant,
  printNameTagParticipant,
  printCertificateParticipant,
  getParticipantsList,
} from "../actions/participantAction";
import swal from "sweetalert";

const { SearchBar } = Search;

const handleDeleteParticipantClick = (dispatch, id) => {
  swal({
    title: "Are you sure you want to delete this data ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteParticipant(id))
      swal("Participant data has been successfully deleted", {
        icon: "success",
      })
      .then(() => {
        dispatch(getParticipantsList())
      });
    } else {
      swal("Participant data failed to be deleted");
    }
  });
};

const handlePrintNameTagParticipantClick = (dispatch, id, name) => {
  swal({
    title: "Are you going to print the name tag ?",
    icon: "info",
    buttons: true,
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(printNameTagParticipant(id, name));
      swal("Participant name tag successfully printed", {
        icon: "success",
      });
    } else {
      swal("Failed to print name tag");
    }
  });
};

const handlePrintCertificateClick = (dispatch, id, name) => {
  swal({
    title: "Are you going to print the certificate ?",
    icon: "info",
    buttons: true,
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(printCertificateParticipant(id, name));
      swal("Participant certificate successfully printed", {
        icon: "success",
      });
    } else {
      swal("Failed to print certificate");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getParticipantList: state.participants.getParticipantList,
    errorParticipantList: state.participants.errorParticipantList,
  };
};

const TableComponent = (props) => {

  if (props.getParticipantList) {
    props.getParticipantList.forEach((element, index) => {
      element.serial = index + 1;
    });
  }

  const columns = [
    {
      dataField: "serial",
      text: "No",
      classes: 'vertical-center',
      align: 'center',
      headerStyle: () => {
        return { width: "4%" };
      },
    },
    {
      dataField: "full_name",
      text: "Full Name",
      classes: 'vertical-center',
      sort: true,
      headerStyle: () => {
        return { width: "18%" };
      },
    },
    {
      dataField: "business_name",
      text: "Business Name",
      classes: 'vertical-center',
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
    },
    {
      dataField: "email",
      text: "Email",
      classes: 'vertical-center',
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
    },
    {
      dataField: "phone_number",
      text: "Phone Number",
      classes: 'vertical-center',
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button
                color="white"
                className="btn btn-outline-info btn-size"
                data-toggle="tooltip"
                title="Detail"
              >
                <FontAwesomeIcon icon={faInfo} />
              </Button>
            </Link>
            <Link to={"edit/" + row.id}>
              <Button
                color="white"
                className="m-2 btn btn-outline-warning btn-size"
                data-toggle="tooltip"
                title="Update"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </Link>
            <Button
              color="white"
              className="btn btn-outline-danger btn-size"
              data-toggle="tooltip"
              title="Delete"
              onClick={() =>
                handleDeleteParticipantClick(props.dispatch, row.id)
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button
              color="white"
              className="m-2 btn btn-outline-success btn-size"
              data-toggle="tooltip"
              title="Print Name Tag"
              onClick={() =>
                handlePrintNameTagParticipantClick(props.dispatch, row.id, row.full_name)
              }
            >
              <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Button
              color="white"
              className="btn btn-outline-success btn-size"
              data-toggle="tooltip"
              title="Print Certificate"
              onClick={() =>
                handlePrintCertificateClick(props.dispatch, row.id, row.full_name)
              }
            >
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getParticipantList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getParticipantList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row className="mt-2 mb-2">
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="loader">
          {props.errorParticipantList ? (
            <h1>{props.errorParticipantList}</h1>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
