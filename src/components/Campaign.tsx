import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampaign } from '../redux/actions/chartActions';
import { Line } from 'react-chartjs-2';
import { Container } from '@mui/material';

const Campaign = () => {
  type Campaign = {
    id: string;

    installs: [
      {
        day: string;
        value: number;
      }
    ];
    name: string;
  };

  type Install = {
    day: string;
    value: number;
  };

  const dispatch = useDispatch();
  const getChartCampaign = useSelector((state: any) => state.getChartCampaign);
  const { campaign } = getChartCampaign;

  useEffect(() => {
    dispatch(getCampaign());
  }, [dispatch]);

  return (
    <>
      <Container>
        {campaign?.map((camp: Campaign) => (
          <Line
            key={camp.id}
            style={{ marginTop: 40 }}
            data={{
              labels: camp?.installs.map((install: Install) => install.day),
              datasets: [
                {
                  label: camp.name,
                  data: camp?.installs.map((install: Install) => install.value),
                  fill: false,
                  backgroundColor: 'rgb(166, 168, 28)',
                  borderColor: 'rgba(18, 135, 231, 0.2)',
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        ))}
      </Container>
    </>
  );
};

export default Campaign;
