import Breadcrumb from '../components/Breadcrumb';
import SalesReport from '../components/SalesReport';
import DefaultLayout from '../layout/DefaultLayout';

const Sales = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sales-Report" />
      <div className="flex flex-col gap-10">
        <SalesReport />
      </div>
    </DefaultLayout>
  );
};

export default Sales;