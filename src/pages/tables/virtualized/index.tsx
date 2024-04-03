import React from 'react';
import VirtualizedTable from './VirtualizedTable';

import { Breadcrumb, Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Customers</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Customers</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <VirtualizedTable />
    </Panel>
  );
};

export default Page;
