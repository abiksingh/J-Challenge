import { AnyAction } from 'redux';
import {
  GET_CAMPAIGN_FAIL,
  GET_CAMPAIGN_REQUEST,
  GET_CAMPAIGN_SUCCESS,
  GET_OVERVIEW_FAIL,
  GET_OVERVIEW_REQUEST,
  GET_OVERVIEW_SUCCESS,
} from '../constants/chartConstants';

export const getChartOverviewReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_OVERVIEW_REQUEST:
      return {
        loading: true,
      };
    case GET_OVERVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
        overview: action.payload,
      };

    case GET_OVERVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getChartCampaignReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_CAMPAIGN_REQUEST:
      return {
        loading: true,
      };
    case GET_CAMPAIGN_SUCCESS:
      return {
        loading: false,
        success: true,
        campaign: action.payload,
      };

    case GET_CAMPAIGN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
