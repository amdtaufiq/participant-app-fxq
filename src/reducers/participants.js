import {
    GET_PARTICIPANTS_LIST,
    GET_PARTICIPANT_DETAIL,
    POST_PARTICIPANT_CREATE,
    PUT_PARTICIPANT_EDIT
} from "../actions/participantAction";

let initialState = {
    getParticipantList: false,
    errorParticipantList: false,
    getParticipantDetail: false,
    errorParticipantDetail: false,
    getResponDataParticipant: false,
    errorResponDataParticipant: false,
}

const participants = (state = initialState, action) => {
    switch (action.type) {
        case GET_PARTICIPANTS_LIST:
            return {
                ...state,
                getParticipantList: action.payload.data.data,
                errorParticipantList: action.payload.errorMessage,
            };
        case GET_PARTICIPANT_DETAIL:
            return {
                ...state,
                getParticipantDetail: action.payload.data,
                errorParticipantDetail: action.payload.errorMessage,
            };
        case POST_PARTICIPANT_CREATE:
            return {
                ...state,
                getResponDataParticipant: action.payload.data,
                errorResponDataParticipant: action.payload.errorMessage,
            };
        case PUT_PARTICIPANT_EDIT:
            return {
                ...state,
                getResponDataParticipant: action.payload.data,
                errorResponDataParticipant: action.payload.errorMessage,
            };
        default:
            return state;
    }
}

export default participants