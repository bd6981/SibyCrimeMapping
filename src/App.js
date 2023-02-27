import React, { useState, useEffect, useRef } from 'react'
import myImage from './img1.png'
import Head from "./Head";
import GoogMap from "./GoogMap";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import Intro from "./Intro"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Image, Row, Col } from 'antd';
import Search from './Search.js';
import events from "./data.json";
import { useMainContext } from './Hooks';


const { Header, Content, Footer, Sider } = Layout;


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `find${key}`,
    icon: React.createElement(icon),
    label: `searchNav ${key}`,
  
  };
});
// const fetcher = (url) => fetch(url).then((res) => res.json());
const App = () => {
  const mapRef = useRef();
  const [loading, setLoading ] = useState()
    
    const [renderEvent, setRenderEvent] = useState([]);
    const { setEventData, reRenderMarkers } = useMainContext({});
useEffect(() => {
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("./data.json");
      if (res.ok) {
        const { events } = await res.json();
        setEventData(events);
        setRenderEvent(events);
      } else {
        throw new Error("Failed to fetch events");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchEvents();
}, []);
  

  useEffect(() => {
    if (reRenderMarkers !== null) {
      setRenderEvent(reRenderMarkers)
    }
  }, reRenderMarkers)
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className="header"
        style={{ height: "13vh", backgroundColor: "dark grey" }}>
        <Row justify="space-between">
          <Col span={3}>
            <Image src={myImage} />
          </Col>
          <Col span={2}>
            <Intro />
          </Col>
        </Row>
      </Header>

      <Content
        style={{
          padding: "0 20px",
        }}
        theme="dark">
        <Breadcrumb
          style={{
            margin: "10px 0",
          }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          theme="dark"
          style={{
            padding: "20px 0",
            background: colorBgContainer,
          }}>
          <Sider
            style={{
              background: colorBgContainer,
              padding: "0 15px",
            }}
            width={250}
            theme="dark">
            <Search />
          </Sider>
          <Content
            style={{
              padding: "0 20px",
              height: "70vh",
            }}
            theme="dark">
            <GoogMap eventData={renderEvent} />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}>
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

