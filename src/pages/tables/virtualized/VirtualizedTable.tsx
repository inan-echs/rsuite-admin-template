import React from 'react';
import { useState, useEffect } from 'react';
import { DOMHelper, Table } from 'rsuite';
// import { mockUsers } from '@/data/mock';
// import { config } from 'dotenv';
import { items } from '@/mock/data';

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
  // useEffect(() => {
  //   // const token = localStorage.getItem('token');
  //   // const token = process.env.REACT_APP_TEMP_JWT || '';

  //   // if (!token) {
  //   //   console.error('No jwt token, please reauthenticate');
  //   //   return;
  //   // }
  //   fetch({
  //     url: 'https://pos.echesconsultancy.com:10000/FbPos/ListCustomers',
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json', // Corrected header name
  //       Authorization: `Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjU1ZDZlODljLTEyZTctNDE3YS1hNDUzLWQwYTIwOGJkYzcxYyIsInRlbmFudElkIjoicG9zZGVtbyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkNhc2hpZXIiLCJleHAiOjE3MTYxNTk0NzQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDAvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMC8ifQ.Xn--YHlhXmYwRDiqJvVCtXtJTBd41NSI7lkxAoWXGFI"`,
  //       userId: '55d6e89c-12e7-417a-a453-d0a208bdc71c',
  //       name: ' '
  //     }
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(fetchedData => {
  //       setCustomer(fetchedData);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('There has been a problem with your fetch operation:', error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    setTableData(items);
    setLoading(false);
  }, []);

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
