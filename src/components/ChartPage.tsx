import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaign, getOverview } from '../redux/actions/chartActions';
import { Line } from 'react-chartjs-2';
import Header from '../UIHelpers/header';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import { CardButtonWrapper } from '../UIHelpers/styles';

const ChartPage = () => {
  const dispatch = useDispatch();

  const getChartOverview = useSelector((state: any) => state.getChartOverview);
  const { overview } = getChartOverview;

  console.log(overview);

  const getChartCampaign = useSelector((state: any) => state.getChartCampaign);
  const { campaign } = getChartCampaign;

  console.log(campaign);

  useEffect(() => {
    dispatch(getCampaign());
    dispatch(getOverview());
  }, [dispatch]);

  return (
    <div>
      <h1>ChartPage APP</h1>
    </div>
  );
};

export default ChartPage;
