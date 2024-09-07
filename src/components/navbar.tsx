import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebardata";
import "./navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="/" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

// const { Header } = Layout;

// const Navbar: React.FC = () => {
//   return (
//     <Header className="navbar">
//       <div className="logo" />
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//         <Menu.Item key="1" icon={<HomeOutlined />}>
//           Home
//         </Menu.Item>
//         <Menu.Item key="2" icon={<UserOutlined />}>
//           Products
//         </Menu.Item>
//         <Menu.Item key="3" icon={<SettingOutlined />}>
//           Reports
//         </Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

//export default Navbar;
