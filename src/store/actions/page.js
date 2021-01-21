import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => (dispatch) => {
  return axios.get(url).then((respone) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: respone.data,
      },
    });
  });
};
