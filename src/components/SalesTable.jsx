import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

function SalesTable({ salesData }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending'
  });
  const [sortedData, setSortedData] = useState([...salesData]);

  useEffect(() => {
    let sortableItems = [...salesData];

    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    setSortedData(sortableItems);
  }, [salesData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return (<IconButton onClick={() => requestSort(key)} size="small">{sortConfig.direction === 'ascending' ? <KeyboardArrowUpIcon fontSize="small"/> : <KeyboardArrowDownIcon />}</IconButton>);
    }
    return (<IconButton onClick={() => requestSort(key)} size="small"><KeyboardArrowUpIcon fontSize="small"/></IconButton>);
  };

  const styles = {
    tableStlye: {
      width: '100%',
      borderCollapse: 'collapse',
      padding: '10px',
    },
    headerRow: {
      borderBottom: '1px solid #ccc',
    },
    cellLeft: {
      textAlign: 'left', 
      paddingBottom: '10px',
    },
    cellRight: {
      textAlign: 'right',
      paddingBottom: '10px',
    },
    dataCellRight: {
      borderBottom: '1px solid #ccc',
      padding: '10px 0',
      textAlign: 'right',
    },
    dataCellLeft: {
      borderBottom: '1px solid #ccc',
      padding: '10px 0',
      textAlign: 'left',
    }
  }

  return (
    <table style={styles.tableStlye}>
      <thead style={styles.headerRow}>
        <tr>
          <th style={styles.cellLeft} >Week Ending{getSortArrow('weekEnding')}</th>
          <th style={styles.cellRight} >Retail Sales{getSortArrow('retailSales')}</th>
          <th style={styles.cellRight} >Wholesale Sales{getSortArrow('wholesaleSales')}</th>
          <th style={styles.cellRight} >Units Sold{getSortArrow('unitsSold')}</th>
          <th style={styles.cellRight} >Retailer Margin{getSortArrow('retailerMargin')}</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.weekEnding}>
            <td style={styles.dataCellLeft}>{row.weekEnding}</td>
            <td style={styles.dataCellRight}>${row.retailSales.toLocaleString()}</td>
            <td style={styles.dataCellRight}>${row.wholesaleSales.toLocaleString()}</td>
            <td style={styles.dataCellRight}>{row.unitsSold.toLocaleString()}</td>
            <td style={styles.dataCellRight}>${row.retailerMargin.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SalesTable;
