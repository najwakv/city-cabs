import React, { useState, useEffect } from 'react';
import adminInstance from '../instance/instance';
import { toast } from "react-hot-toast";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";

const SalesReport = () => {
  const [selectedPeriods, setSelectedPeriods] = useState('day');
  const [data, setData] = useState([]);

  useEffect(() => {
    adminInstance
      .post('/salesData', { day: 'day' })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(error.message)
      });
  }, []);

  const handleSearchData = async (day) => {
    try {
      const response = await adminInstance.post('/salesData', { day });
      setData(response.data);
    } catch (error) {
        toast.error(error.message)
    }
  };

  const handleDownloadClick = () => {
    const element = document.getElementById('table'); // Replace "table" with the ID of your table

    const options = {
      margin: 1,
      filename: 'sales-report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <>
      <div className="flex flex-col ">
        <button
          className="from-emerald-900 to-emerald-800 text-gray-200 hover:border-red-900 hover:bg-gray-50 m-4 flex w-fit items-center gap-2  border bg-gradient-to-br px-4 py-2 duration-300"
          onClick={handleDownloadClick}
        >
          Download Report{' '}
        </button>
        <div className="bg-blac m-0 flex items-center justify-center gap-8">
          <button
            className={`${
              selectedPeriods == 'day'
                ? 'border-emerald-800 border-b duration-300 '
                : 'hover:border-emerald-800 border-b duration-300 '
            }`}
            onClick={() => {
              setSelectedPeriods('day');
              handleSearchData('day');
            }}
          >
            Day
          </button>
          <button
            className={`${
              selectedPeriods == 'week'
                ? 'border-emerald-800 border-b duration-300 '
                : 'hover:border-emerald-800 border-b duration-300 '
            }`}
            onClick={() => {
              setSelectedPeriods('week');
              handleSearchData('week');
            }}
          >
            Week
          </button>
          <button
            className={`${
              selectedPeriods == 'month'
                ? 'border-emerald-800 border-b duration-300 '
                : 'hover:border-emerald-800 border-b duration-300 '
            }`}
            onClick={() => {
              setSelectedPeriods('month');
              handleSearchData('month');
            }}
          >
            Month
          </button>
          <button
            className={`${
              selectedPeriods == 'year'
                ? 'border-emerald-800 border-b duration-300 '
                : 'hover:border-emerald-800 border-b duration-300 '
            }`}
            onClick={() => {
              setSelectedPeriods('year');
              handleSearchData('year');
            }}
          >
            Year
          </button>
        </div>

        <div className="flex h-auto w-full items-center justify-center px-20 py-4">
          <form id="table" className="max-w-full p-4">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="w-1/6 border px-4 py-2">Index</th>
                  <th className="w-1/6 border px-4 py-2">Driver Id</th>
                  <th className="w-1/6 border px-4 py-2">Cab</th>
                  <th className="w-1/6 border px-4 py-2">Pickup</th>
                  <th className="w-1/6 border px-4 py-2">Dropff</th>
                  <th className="w-1/6 border px-4 py-2">Fare</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className="border px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="text-wrap break-all border px-4 py-2">
                        {data.driverId}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {data.service}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {data.pickup}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {data.dropoff}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {data.fare}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default SalesReport;
