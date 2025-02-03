import React from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../../components/ProductInfo';
import SalesTable from '../../components/SalesTable';
import SalesChart from '../../components/SalesChart';
import './SalesDashboard.css';

function SalesDashboard() {
  const { productInfo, status, error } = useSelector((state) => state.sales);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }
  if (!productInfo) {
    return null;
  }

  return (
    <div className='sales-dashboard'>
      <aside className='product-info'>
        <ProductInfo
          title={productInfo.title}
          subtitle={productInfo.subtitle}
          image={productInfo.image}
          tags={productInfo.tags}
        />
      </aside>
      <div className='data-display'>
        <div className='linechart-container'>
          <SalesChart salesData={productInfo.sales} />
        </div>
        <div className='table-container'>
          <SalesTable salesData={productInfo.sales} />
        </div>
      </div>
    </div>
  );
}

export default SalesDashboard;
