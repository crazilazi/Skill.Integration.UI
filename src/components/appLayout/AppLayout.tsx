import React, { useState } from "react";
import { Button, Flex, Layout, Menu } from "antd";
import { SiderMenuItem, MenuLayoutStyles } from "./siderMenu/SiderMenuItem";
import { siderMenuData } from "./siderMenu/SiderMenuData";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AppRoutes from "../../routes/Routes";

const { Sider, Content, Header } = Layout;

const renderMenuItems = (items: SiderMenuItem[]) => {
  return items.map((item) =>
    item.children ? (
      <Menu.SubMenu key={item.key} icon={item.icon} title={item.title}>
        {renderMenuItems(item.children)}
      </Menu.SubMenu>
    ) : (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={`/${item.key}`}>{item.title}</Link>
      </Menu.Item>
    )
  );
};

const {
  layoutStyle,
  siderStyle,
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
  siderStyle: React.CSSProperties;
  contentStyle: React.CSSProperties;
  footerStyle: React.CSSProperties;
} = MenuLayoutStyles();

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex gap="middle" vertical={false}>
      <Layout style={layoutStyle}>
        <Sider
          width={256}
          style={siderStyle}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div
            style={{
              minHeight: 65,
              textAlign: "center",
            }}
          >
            <h2> {collapsed ? "BLR" : "Bengaluru"}</h2>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            theme="dark"
            style={{
              height: "80%",
              borderRight: 0,
            }}
          >
            {renderMenuItems(siderMenuData)}
          </Menu>
          <div
            style={{
              minHeight: 65,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "#fff",
              }}
            ></Button>
          </div>
        </Sider>
        <Layout>
          <Content style={contentStyle}></Content>
          <Footer style={footerStyle}>@Bengaluru 2024</Footer>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default AppLayout;
