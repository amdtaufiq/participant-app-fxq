import axios from "axios";

export const GET_PARTICIPANTS_LIST = "GET_PARTICIPANTS_LIST";
export const GET_PARTICIPANT_DETAIL = "GET_PARTICIPANT_DETAIL";
export const POST_PARTICIPANT_CREATE = "POST_PARTICIPANT_CREATE";
export const PUT_PARTICIPANT_EDIT = "PUT_PARTICIPANT_EDIT";

export const getParticipantsList = () => {
  return (dispatch) => {
    axios
      .get("https://participant-api-fxq.herokuapp.com/api/v1/participant")
      .then(function (response) {
        dispatch({
          type: GET_PARTICIPANTS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PARTICIPANTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getParticipantDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://participant-api-fxq.herokuapp.com/api/v1/participant/" + id)
      .then(function (response) {
        dispatch({
          type: GET_PARTICIPANT_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PARTICIPANT_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postParticipantCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://participant-api-fxq.herokuapp.com/api/v1/participant",
        data
      )
      .then(function (response) {
        dispatch({
          type: POST_PARTICIPANT_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_PARTICIPANT_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putParticipantUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://participant-api-fxq.herokuapp.com/api/v1/participant/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_PARTICIPANT_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_PARTICIPANT_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteParticipant = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "https://participant-api-fxq.herokuapp.com/api/v1/participant/"+id
      )
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        
      });
  };
};

export const printNameTagParticipant = (id, name) => {
  return (dispatch) => {
    axios({
      url: "https://participant-api-fxq.herokuapp.com/api/v1/participant/name-tag/"+id, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'NameTag-'+name+'.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
  });
  };
};

export const printCertificateParticipant = (id, name) => {
  return (dispatch) => {
    axios({
      url: "https://participant-api-fxq.herokuapp.com/api/v1/participant/certificate/"+id, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Certificate-'+name+'.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
  });
  };
};


export const deleteDataParticipant = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PARTICIPANT_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_PARTICIPANT_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};