import React from 'react';
import { Flex, Layout, Typography, Select, Space} from 'antd';
import { AppstoreOutlined, OrderedListOutlined } from "@ant-design/icons"
import MenuItem from './MenuItem';
import Cards from './Cards';

const { Sider, Content } = Layout;

const { Title } = Typography

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const contentStyle: React.CSSProperties = {
  height: "100vh",
  paddingTop: '130px',
  color: '#000',
  backgroundColor: '#fff',
  paddingLeft: "30px",
  paddingRight: "30px",
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#fff',
  height: '100vh',
  paddingTop: '60px',
};



const Shop: React.FC = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          <Flex  align='center' justify='left' style={{marginBottom: '40px', marginLeft: '30px'}}>
            Shop <img style={{width: '20px', height: '20px'}} src="/src/assets/icons/rightIcon.png" alt="" /> All Products
          </Flex>
          <MenuItem/>
        </Sider>
        <Content style={contentStyle}>
          <Flex justify='space-between' align='center'>
            <Flex align='center' gap={"10px"}>
              <AppstoreOutlined style={{fontSize: "25px", cursor: "pointer",}} />
              <OrderedListOutlined style={{fontSize: "25px", cursor: "pointer",}} />
              <Title level={3} style={{fontSize: "16px", cursor: "pointer", marginTop: "5px"}}>Showing 1-16 of 72 results</Title>
            </Flex>

            <Space wrap>
              <Select
                defaultValue="Shot by Latest"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
              </Select>
            </Space>

          </Flex>
          <Cards/>
        </Content>
      </Layout>
    </Layout>
  </Flex>
);

export default Shop;