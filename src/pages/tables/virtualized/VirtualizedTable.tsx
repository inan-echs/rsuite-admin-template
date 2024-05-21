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

// interface Item {
//   itemCode: string;
//   itemType: number;
//   itemName: string;
//   itemDesc: string;
//   gstInclusivePrice: boolean;
//   price: number;
//   taxable: boolean;
//   onHand: number;
//   inStock: boolean;
//   discountable: boolean;
//   active: boolean;
//   itemCategoryId: number;
// }

interface Item {
  cardCode: string; // Adjusted to match the JSON data structure
  cardName: string;
  vatStatus: string;
  phone: string;
  cardType: string;
  lastModified: string;
  // Include other fields as necessary
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

    if (!userId) {
      console.error('user id is invalid');
    }

    const fetchData = async () => {
      try {
        const response = await fetch('https://pos.echesconsultancy.com:10000/FbPos/ListCustomers', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'User-Agent': 'insomnia/9.2.0'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }

        const jsonData = await response.json();
        setTableData(
          jsonData.map(item => ({
            cardCode: item.cardCode,
            cardName: item.cardName,
            vatStatus: item.vatStatus,
            phone: item.phone,
            cardType: item.cardType,
            lastModified: item.lastModified
            // Map other fields as necessary
          }))
        );
        console.log(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();

    // fetch({
    //   url: 'https://pos.echesconsultancy.com:10000/FbPos/ListCustomers',
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //     userId: `${userId}`,
    //     name: ' '
    //   }
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(fetchedData => {
    //     setTableData(fetchedData);
    //     console.log(fetchedData);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    //     console.log('Response: ', error.response);
    //     setLoading(false);
    //   });
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
            <HeaderCell>Card Code</HeaderCell>
            <Cell dataKey="cardCode" />
          </Column>

          <Column width={130}>
            <HeaderCell>Card Name</HeaderCell>
            <Cell dataKey="cardName" />
          </Column>

          <Column width={130}>
            <HeaderCell>VAT Status</HeaderCell>
            <Cell dataKey="vatStatus" />
          </Column>

          <Column width={100}>
            <HeaderCell>Phone</HeaderCell>
            <Cell dataKey="phone" />
          </Column>

          <Column width={100}>
            <HeaderCell>Card Type</HeaderCell>
            <Cell dataKey="cardType" />
          </Column>

          <Column width={200}>
            <HeaderCell>Last Modified</HeaderCell>
            <Cell dataKey="lastModified" />
          </Column>

          {/* Add more columns as needed */}
        </Table>
      )}
    </>
  );
};

export default VirtualizedTable;

{
  /* <div> */
}
{
  /* Render your data here */
}
{
  /* <pre>{JSON.stringify(tableData, null, 2)}</pre>  */
}
{
  /* Example: Displaying JSON data */
}
// </div>
