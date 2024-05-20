import React from 'react';
import { useState, useEffect } from 'react';
import { DOMHelper, Table } from 'rsuite';
// import { mockUsers } from '@/data/mock';
// import { config } from 'dotenv';
// import { items } from '@/mock/data';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

// const data = mockUsers(1000);

// config();

interface Item {
  itemCode: string;
  itemType: number;
  itemName: string;
  itemDesc: string;
  gstInclusivePrice: boolean;
  price: number;
  taxable: boolean;
  onHand: number;
  inStock: boolean;
  discountable: boolean;
  active: boolean;
  itemCategoryId: number;
}

const VirtualizedTable = () => {
  // const [customer, setCustomer] = useState<Datatype[]>([]);
  const [tableData, setTableData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  // bringing this back once the other stuff has been resolved
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token) {
      console.error('No jwt token, please reauthenticate');
      return;
    }
    fetch({
      url: 'https://pos.echesconsultancy.com:10000/FbPos/ListCustomers',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        userId: `${userId}`,
        name: ' '
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(fetchedData => {
        setTableData(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   setTableData(items);
  //   setLoading(false);
  // }, []);

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <Table
          virtualized
          height={Math.max(getHeight(window) - 120, 400)}
          data={tableData}
          translate3d={false}
        >
          <Column width={70} align="center" fixed>
            <HeaderCell>Item Code</HeaderCell>
            <Cell dataKey="itemCode" />
          </Column>

          <Column width={130}>
            <HeaderCell>Item Name</HeaderCell>
            <Cell dataKey="itemName" />
          </Column>

          <Column width={130}>
            <HeaderCell>Description</HeaderCell>
            <Cell dataKey="itemDesc" />
          </Column>

          <Column width={100}>
            <HeaderCell>Taxable</HeaderCell>
            <Cell dataKey="taxable" />
          </Column>

          <Column width={100}>
            <HeaderCell>In Stock</HeaderCell>
            <Cell dataKey="inStock" />
          </Column>

          <Column width={200}>
            <HeaderCell>On Hand</HeaderCell>
            <Cell dataKey="onHand" />
          </Column>

          {/* Add more columns as needed */}
        </Table>
      )}
    </>
  );
};

export default VirtualizedTable;
