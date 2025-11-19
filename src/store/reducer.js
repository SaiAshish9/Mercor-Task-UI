import { SET_SHORTLISTED, SET_DATA, SET_FILTERS } from "./types";

export const initialState = {
  filters: {
    locations: [],
    roles: [],
    organizations: [],
    skills: [],
  },
  data: [],
  shortlisted: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: action.payload,
      };
    }
    case SET_SHORTLISTED: {
      return {
        ...state,
        shortlisted: action.payload,
      };
    }
    default:
      return state;
  }
}
