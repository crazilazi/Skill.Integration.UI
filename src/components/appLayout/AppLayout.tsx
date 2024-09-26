import React from "react";
import { Flex, Layout } from "antd";
import {  MenuLayoutStyles } from "./siderMenu/SiderMenuItem";
import { Outlet } from "react-router-dom";
import { HeaderWithLogout, NavBar } from ".";

const { Content, Footer } = Layout;

const {
  layoutStyle,
  contentStyle,
  footerStyle,
}: {
  layoutStyle: {
    borderRadius: number;
    overflow: string;
    width: string;
    maxWidth: string;
    minHeight: string;
  };
  contentStyle: React.CSSProperties;
  footerStyle: React.CSSProperties;
} = MenuLayoutStyles();

const AppLayout: React.FC = () => {
  return (
    <Flex gap="middle" vertical={false}>
      <Layout style={layoutStyle}>
        <NavBar></NavBar>
        <Layout>
          <HeaderWithLogout></HeaderWithLogout>
         <Content style={contentStyle}><Outlet/></Content>
          <Footer style={footerStyle}>@Bengaluru 2024</Footer>
        </Layout>
        </Layout>
    </Flex>
  );
};

export default AppLayout;
