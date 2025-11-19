import {
  SET_SHORTLISTED,
  SET_FILTERS,
  SET_DATA,
  SET_SELECTED_FILTERS,
  SET_DATA_LOADED,
  SET_BUDGET,
} from "./types";

export default function useActions(_, dispatch) {
  const setShortlisted = (shortlisted) =>
    dispatch({ type: SET_SHORTLISTED, payload: shortlisted });

  const setFilters = (filters) =>
    dispatch({ type: SET_FILTERS, payload: filters });

  const setSelectedFilters = (selectedFilters) =>
    dispatch({ type: SET_SELECTED_FILTERS, payload: selectedFilters });

  const setData = (data) => dispatch({ type: SET_DATA, payload: data });

  const setDataLoaded = (loaded) =>
    dispatch({ type: SET_DATA_LOADED, payload: loaded });

  const setBudget = (budget) => dispatch({ type: SET_BUDGET, payload: budget });

  return {
    setShortlisted,
    setSelectedFilters,
    setFilters,
    setData,
    setDataLoaded,
    setBudget,
  };
}
