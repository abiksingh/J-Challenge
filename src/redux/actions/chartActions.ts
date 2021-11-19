import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_CAMPAIGN_FAIL,
  GET_CAMPAIGN_REQUEST,
  GET_CAMPAIGN_SUCCESS,
  GET_OVERVIEW_FAIL,
  GET_OVERVIEW_REQUEST,
  GET_OVERVIEW_SUCCESS,
} from '../constants/chartConstants';

export const getOverview = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_OVERVIEW_REQUEST,
    });

    const { data } = await axios.get(
      `http://5c3db915a9d04f0014a98a79.mockapi.io/overview`
    );

    dispatch({
      type: GET_OVERVIEW_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_OVERVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCampaign = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_CAMPAIGN_REQUEST,
    });

    const { data } = await axios.get(
      `http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns`
    );

    dispatch({
      type: GET_CAMPAIGN_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_CAMPAIGN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
