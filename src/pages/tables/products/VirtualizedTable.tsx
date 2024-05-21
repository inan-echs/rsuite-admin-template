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
        const response = await fetch('https://pos.echesconsultancy.com:10000/FbPos/ListItems', {
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
            itemCode: item.itemCode,
            itemName: item.itemName,
            price: item.price,
            onHand: item.onHand,
            inStock: item.inStock,
            itemCategoryId: item.itemCategoryId
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
            <HeaderCell>Code</HeaderCell>
            <Cell dataKey="itemCode" />
          </Column>

          <Column width={130}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="itemName" />
          </Column>

          <Column width={130}>
            <HeaderCell>price</HeaderCell>
            <Cell dataKey="price" />
          </Column>


          <Column width={100}>
            <HeaderCell>onHand</HeaderCell>
            <Cell dataKey="onHand" />
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
