import { SET_SHORTLISTED, SET_FILTERS, SET_DATA } from "./types";

export default function useActions(_, dispatch) {
  const setShortlisted = (shortlisted) => dispatch({ type: SET_SHORTLISTED, payload: shortlisted });

  const setFilters = (filters) => dispatch({ type: SET_FILTERS, payload: filters });

  const setData = (data) => dispatch({ type: SET_DATA, payload: data });

  return {
    setShortlisted,
    setFilters,
    setData
  };
}
