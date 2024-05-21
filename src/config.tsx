import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscTable } from 'react-icons/vsc';
import { MdFingerprint, MdDashboard, MdModeEditOutline } from 'react-icons/md';
import CubesIcon from '@rsuite/icons/legacy/Cubes';

export const appNavs = [
  {
    eventKey: 'tables',
    icon: <Icon as={VscTable} />,
    title: 'Tables',
    to: '/table-members',
    children: [
      {
        eventKey: 'members',
        title: 'Products',
        to: '/table-members'
      },
      {
        eventKey: 'virtualized',
        title: 'Customers',
        to: '/table-virtualized'
      }
    ]
  }
];
