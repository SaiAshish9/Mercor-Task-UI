import {
  SET_SHORTLISTED,
  SET_DATA,
  SET_FILTERS,
  SET_SELECTED_FILTERS,
  SET_DATA_LOADED,
  SET_BUDGET,
} from "./types";

export const initialState = {
  filters: {
    locations: [],
    roles: [],
    organizations: [],
    skills: [],
  },
  selectedFilters: {
    locations: [],
    roles: [],
    organizations: [],
    skills: [],
  },
  data: [],
  shortlisted: false,
  dataLoaded: false,
  budget: "",
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

    case SET_SELECTED_FILTERS: {
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          ...action.payload,
        },
      };
    }

    case SET_SHORTLISTED: {
      return {
        ...state,
        shortlisted: action.payload,
      };
    }

    case SET_DATA_LOADED: {
      return {
        ...state,
        dataLoaded: action.payload,
      };
    }

    case SET_BUDGET: {
      return {
        ...state,
        budget: action.payload,
      };
    }

    default:
      return state;
  }
}
