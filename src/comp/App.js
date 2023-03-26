import React, { useState, useEffect, useRef } from "react";
import myImage from "./img1.png";
import GoogMap from "./GoogMap";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import Intro from "./Intro";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Image, Row, Col } from "antd";
// import Search from './Search.jsx';
import events from "../data.json";
import { useMainContext } from "../Hooks";
import "./App.css";

const { Header, Content, Footer } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `find${key}`,
      icon: React.createElement(icon),
      label: `searchNav ${key}`,
    };
  }
);
// const fetcher = (url) => fetch(url).then((res) => res.json());
const App = () => {
  const mapRef = useRef();
  const [loading, setLoading] = useState();

  const [renderEvent, setRenderEvent] = useState([]);
  const { setEventData, reRenderMarkers } = useMainContext({});
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch("./api");
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
      setRenderEvent(reRenderMarkers);
    }
  }, reRenderMarkers);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className="header"
        style={{ height: "13vh", backgroundColor: "dark grey" }}>
        <Row justify="space-between">
          <Col
            className="image-grid"
            position="fixed"
            alignItem="center"
            justify-content="center">
            <div className="responsive-image">
              <Image
                className="icon"
                src={myImage}
                height="14.2vh"
                justify-content="center"
                display="flex"
                align-item="center"
                align-content="center"
              />
            </div>
          </Col>
          <Col
            height="5vh"
            justify-content="center"
            display="flex"
            align-item="center"
            align-content="center">
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
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          theme="dark"
          style={{
            padding: "20px 0",
            background: colorBgContainer,
            backgroundColor: "#001529",
          }}>
          <Content
            style={{
              padding: "0 20px",
              height: "64vh",
            }}
            theme="dark">
            <GoogMap eventData={renderEvent} />
          </Content>
        </Layout>
      </Content>

      <Footer style={{ backgroundColor: "#001529", margin: "0 auto" }}>
        <h4
          className="designer"
          style={{ color: "white", marginBottom: "1px", marginTop: "1px" }}>
          Designed and Developed By : Brittany Davis
        </h4>
        <div className="item2" style={{ marginBottom: "10px" }}>
          <a href="http://github.com/bd6981" className="item1">
            <BsGithub size="20px" style={{ color: "white" }} />
          </a>

          <a
            href="http://www.linkedin.com/in/brittany~davis/"
            className="item1">
            <AiOutlineLinkedin
              size="20px"
              style={{ color: "white", marginLeft: "5px" }}
            />
          </a>
        </div>
      </Footer>
    </Layout>
  );
};
export default App;
