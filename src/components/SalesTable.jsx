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
      return (<IconButton onClick={() => requestSort(key)} size="small">{sortConfig.direction === 'ascending' ? <KeyboardArrowUpIcon fontSize="small"/> : <KeyboardArrowDownIcon fontSize="small"/>}</IconButton>);
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
    headerLeft: {
      textAlign: 'left', 
      paddingBottom: '10px',
      paddingLeft: '15px',
      fontSize: '12px',
    },
    headerRight: {
      textAlign: 'right',
      paddingBottom: '10px',
      fontSize: '12px',
    },
    dataCellRight: {
      borderBottom: '1px solid #ccc',
      padding: '10px 30px 10px 0px',
      textAlign: 'right',
      fontSize: '12px',
    },
    dataCellLeft: {
      borderBottom: '1px solid #ccc',
      padding: '10px 0px 10px 15px',
      textAlign: 'left',
      fontSize: '12px',
    }
  }

  return (
    <table style={styles.tableStlye}>
      <thead style={styles.headerRow}>
        <tr>
          <th style={styles.headerLeft}>WEEK ENDING{getSortArrow('weekEnding')}</th>
          <th style={styles.headerRight}>RETAIL SALES{getSortArrow('retailSales')}</th>
          <th style={styles.headerRight}>WHOLESALE SALES{getSortArrow('wholesaleSales')}</th>
          <th style={styles.headerRight}>UNITS SOLD{getSortArrow('unitsSold')}</th>
          <th style={styles.headerRight}>RETAIL MARGIN{getSortArrow('retailerMargin')}</th>
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
