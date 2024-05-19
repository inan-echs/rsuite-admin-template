import React from 'react';
import { useState, useEffect } from 'react';
import { DOMHelper, Table } from 'rsuite';
// import { mockUsers } from '@/data/mock';
// import { config } from 'dotenv';

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

// const data = mockUsers(1000);

// config();

interface Datatype {
  CardCode: string;
  CardName: string;
  VatStatus: string;
  Phone1: string;
  CardType: string;
  ListNum: string;
}

const VirtualizedTable = () => {
  const [customer, setCustomer] = useState<Datatype>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = localStorage.getItem('token');
    const token = process.env.REACT_APP_TEMP_JWT;

    if (!token) {
      console.error('No jwt token, please reauthenticate');
      return;
    }
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    fetch('https://pos.echesconsultancy.com:10000/FbPos/ListCustomers', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(fetchedData => {
        setCustomer(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <Table
          virtualized
          height={Math.max(getHeight(window) - 120, 400)}
          data={customer}
          translate3d={false}
        >
          <Column width={70} align="center" fixed>
            <HeaderCell>Card Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={130}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>

          <Column width={130}>
            <HeaderCell>Vat Status</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Card type</HeaderCell>
            <Cell dataKey="gender" />
          </Column>

          <Column width={100}>
            <HeaderCell>List num</HeaderCell>
            <Cell dataKey="age" />
          </Column>

          <Column width={200}>
            <HeaderCell>Address</HeaderCell>
            <Cell dataKey="city" />
          </Column>

          <Column minWidth={200} flexGrow={1}>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>
        </Table>
      )}
    </>
  );
};

export default VirtualizedTable;
