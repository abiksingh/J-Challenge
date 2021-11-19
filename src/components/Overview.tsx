import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverview } from '../redux/actions/chartActions';
import { Line } from 'react-chartjs-2';
import { Container } from '@mui/material';

const Overview = () => {
  interface IGetChartOverview {
    getChartOverview: {
      overview: {
        installs: [
          {
            day: string;
            value: number;
          }
        ];
        revenue: [
          {
            day: string;
            value: number;
          }
        ];
      };
    };
  }

  type Install = {
    day: string;
    value: number;
  };

  type Revenue = {
    day: string;
    value: number;
  };

  const dispatch = useDispatch();
  const getChartOverview = useSelector(
    (state: IGetChartOverview) => state.getChartOverview
  );
  const { overview } = getChartOverview;

  useEffect(() => {
    dispatch(getOverview());
  }, [dispatch]);

  return (
    <>
      <Container>
        {overview?.installs && (
          <Line
            style={{ marginTop: 40 }}
            data={{
              labels: overview?.installs.map((install: Install) => install.day),
              datasets: [
                {
                  label: 'Installs for a day ',
                  data: overview?.installs.map(
                    (install: Install) => install.value
                  ),
                  fill: false,
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgba(255, 99, 132, 0.2)',
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
        )}

        {overview?.revenue && (
          <Line
            style={{ marginTop: 40, marginBottom: 40 }}
            data={{
              labels: overview?.revenue.map((rev: Revenue) => rev.day),
              datasets: [
                {
                  label: 'Revenue for a day ',
                  data: overview?.revenue.map((rev: Revenue) => rev.value),
                  fill: false,
                  backgroundColor: 'rgb(99, 255, 208)',
                  borderColor: 'rgba(37, 95, 161, 0.2)',
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
        )}
      </Container>
    </>
  );
};

export default Overview;
