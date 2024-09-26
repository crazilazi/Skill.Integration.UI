import { Button, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useState } from 'react'
import { MenuLayoutStyles, SiderMenuItem } from './SiderMenuItem';
import { Link } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { siderMenuData } from './SiderMenuData';

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
    siderStyle,
  }: {
    layoutStyle: {
      borderRadius: number;
      overflow: string;
      width: string;
      maxWidth: string;
      minHeight: string;
    };
    siderStyle: React.CSSProperties;
  } = MenuLayoutStyles();

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
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
  )
}

export default NavBar