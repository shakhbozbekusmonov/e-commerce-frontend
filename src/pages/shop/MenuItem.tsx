import React from 'react';
import type { MenuProps, CheckboxProps } from 'antd';
import {  Menu, Checkbox, Typography } from 'antd';
import { FilterByBlack, FilterByBlue, FilterByGreen, FilterByOrange, FilterByRed, FilterByYellow } from './FilterByColor';
import { FilterByL, FilterByM, FilterByS, FilterByXL, FilterByXXL, FilterByXXXL } from './FilterBySize';


const { Title} = Typography

const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };





type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [

  {
    key: 'sub2',
    label: <Title style={{textAlign:"left"}} level={3}>Product Categories</Title>,
    children: [
      { key: '1', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Men</Checkbox> },
      { key: '2', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Women</Checkbox> },
      { key: '3', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Kids</Checkbox> },
      { key: '4', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Bags</Checkbox> },
      { key: '5', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Belts</Checkbox> },
      { key: '6', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Wallets</Checkbox> },
      { key: '7', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Watches</Checkbox> },
      { key: '8', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Accessories</Checkbox> },
      { key: '9', label: <Checkbox style={{width: '100%', height: '100%', fontWeight: "600"}} onChange={onChange}>Winter Wear</Checkbox> },

    ],
  },
  {
    key: 'sub4',
    label: <Title style={{textAlign:"left"}} level={3}>Filter by Color</Title>,
    children: [
      { key: '11', label: <FilterByRed/> },
      { key: '12', label: <FilterByBlue/> },
      { key: '13', label: <FilterByOrange/> },
      { key: '14', label: <FilterByBlack/> },
      { key: '15', label: <FilterByGreen/> },
      { key: '16', label: <FilterByYellow/> },
      

    ],
  },
  {
    key: 'sub5',
    label: <Title style={{textAlign:"left"}} level={3}>Filter by Size</Title>,
    children: [
      { key: '11', label: <FilterByS/> },
      { key: '12', label: <FilterByM/> },
      { key: '13', label: <FilterByL/> },
      { key: '14', label: <FilterByXL/> },
      { key: '15', label: <FilterByXXL/> },
      { key: '16', label: <FilterByXXXL/> },
    ],
  },

];

const MenuItem: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default MenuItem;