import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  positions: [],
  isLoading: false,
  users: [],
  topDoctor: [],
  allDoctor: [],
  allScheduleTime: [],
  allRequiredData: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoading = false;
      // console.log("success", copyState);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      state.genders = [];
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      state.isLoading = false;
      // console.log("success", copyState);
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      state.isLoading = false;
      // console.log("success", copyState);
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      state.positions = [];
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_SUCCEED:
      state.users = action.userAction;
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILED:
      state.users = [];
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_SUCCEED:
      state.topDoctor = action.dataDoctor;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_FAILED:
      state.topDoctor = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTOR_SUCCEED:
      state.allDoctor = action.dataDoctor;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTOR_FAILED:
      state.topDoctor = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_CODE_SCHEDULE_SUCCEED:
      state.allScheduleTime = action.dataTime;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_CODE_SCHEDULE_FAILED:
      state.allScheduleTime = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_CODE_DOCTOR_SUCCEED:
      state.allRequiredData = action.listData;
      console.log("check list data ", action.listData);
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_CODE_DOCTOR_FAILED:
      state.allRequiredData = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
