import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSalesData } from './features/sales/salesSlice';
import SalesDashboard from './features/sales/SalesDashboard';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <SalesDashboard />
    </div>
  );
}

export default App;
