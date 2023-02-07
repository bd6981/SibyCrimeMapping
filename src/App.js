import React from 'react'
import myImage from './img1.png'
import Head from "./Head";
import GoogMap from "./GoogMap";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
// import {Image} from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Image } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header" style={{height: "13vh", backgroundColor: "dark grey", alignText: "left" }}>
        <div className="logo" style={{height: "15vh", backgroundColor: "dark grey", alignText: "left" }}/>
        <Image
          src={myImage}
          style={{ height: "14vh", width: "14vw" }}
        />
        
        
      </Header>
      <Content
        style={{
          padding: '0 20px',
        }}
      >
        
        <Breadcrumb
          style={{
            margin: '10px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '20px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 20px',
              height: "70vh",
            }}
          >
            <GoogMap/>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <h4 className="designer">Designed and Developed By : Brittany Davis</h4>
        <div className="item2">
          <a href="http://github.com/bd6981" className="item1">
            <BsGithub size="20px" />
          </a>

          <a
            href="http://www.linkedin.com/in/brittany~davis/"
            className="item1">
            <AiOutlineLinkedin size="20px" />
          </a>
          </div>
      </Footer>
    </Layout>
  );
};
export default App;

