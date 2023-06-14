import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import adminInstance from '../instance/instance';
import { toast } from 'react-hot-toast';

const ChartThree = () => {

const [state, setState] = useState({
    series: [],
    options: {
      chart: {
        type: 'donut',
      },
      colors: ['#10B981', '#375E83', '#259AE6', '#FFA70B', "#f3252e",'#beaefa','#a67391'],
      labels: [],
      legend: {
        show: true,
        position: 'bottom',
      },
      // ...
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            background: 'transparent',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 2600,
          options: {
            chart: {
              width: 380,
            },
          },
        },
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 200,
            },
          },
        },]
    },
  });


  useEffect(() => {
    adminInstance.get('/cabChart').then((response) => {
      const { cabName, earnings } = response.data;
      const seriesData = earnings.slice(0, cabName.length); // Take earnings data for the same number of cab names
      setState((prevState) => ({
        ...prevState,
        series: seriesData,
        options: {
          ...prevState.options,
          labels: cabName,
        },
      }));
    }).catch((error) => {
      const { response, message } = error;
      const errorMessage = response ? response.data.message : message;
      toast.error(errorMessage);
    });
  }, []);
  

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Rides by cab
          </h5>
        </div>
        <div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

    </div>
  );
};

export default ChartThree;
