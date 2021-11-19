import React from 'react';
import Header from '../UIHelpers/header';
import { Container } from '@mui/material';
import Overview from '../components/Overview';
import Campaign from '../components/Campaign';

const ChartPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Overview />
        <Campaign />
      </Container>
    </>
  );
};

export default ChartPage;
