import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getChartOverviewReducer,
  getChartCampaignReducer,
} from './redux/reducers/chartReducers';
const reducer = combineReducers({
  getChartOverview: getChartOverviewReducer,
  getChartCampaign: getChartCampaignReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
