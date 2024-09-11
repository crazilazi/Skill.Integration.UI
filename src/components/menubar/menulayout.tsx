import React, { useState } from "react";
import { Button, Flex, Layout, Menu } from "antd";
import { MenuItem } from "./menuitem";
import { menuData } from "./menudata";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Sider, Content, Header } = Layout;

const renderMenuItems = (items: MenuItem[]) => {
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

// const headerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   paddingInline: 48,
//   backgroundColor: "#4096ff",
// };

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#ffffff",
};

const siderStyle: React.CSSProperties = {
  color: "#fff",
  background: "#001529",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000",
  backgroundColor: "#ffffff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
  minHeight: "100vh",
};

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex gap="middle" wrap>
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
            <h2> {collapsed ? "B" : "Bengaluru"}</h2>
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
            {renderMenuItems(menuData)}
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
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>@Bengaluru 2024</Footer>
        </Layout>
      </Layout>
    </Flex>

    // <Layout style={{ minHeight: "100vh" }}>
    //   <Sider width={256} className="site-layout-background">
    //     {/* Header inside Sider */}
    //     <div
    //       style={{
    //         padding: "16px",
    //         textAlign: "center",
    //         background: "#001529",
    //       }}
    //     >
    //       <h2 style={{ color: "white" }}>My App</h2>
    //     </div>
    //     <Menu
    //       mode="inline"
    //       defaultSelectedKeys={["1"]}
    //       style={{ height: "100%", borderRight: 0 }}
    //     >
    //       {renderMenuItems(menuData)}
    //     </Menu>
    //   </Sider>
    //   <Layout>
    //     <Header className="site-layout-background" style={{ padding: 0 }}>
    //       {/* Header content */}
    //     </Header>
    //     <Content style={{ margin: "0 16px" }}>
    //       <div style={{ padding: 24, minHeight: 360 }}>
    //         {/* Your content goes here */}
    //       </div>
    //     </Content
    //   </Layout>
    // </Layout>
  );
};

export default AppLayout;
