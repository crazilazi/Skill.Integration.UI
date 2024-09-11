import { MenuItem } from "./menuitem";
import {
  AppstoreAddOutlined,
  UserOutlined,
  RedditOutlined,
  SettingOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";

export const menuData: MenuItem[] = [
  {
    key: "1",
    title: "Dashboard",
    icon: <AppstoreAddOutlined />,
  },
  {
    key: "sub1",
    title: "Settings",
    icon: <SettingOutlined />,
    children: [
      {
        key: "2",
        title: "Plans",
        icon: <FundProjectionScreenOutlined />,
      },
      {
        key: "3",
        title: "Skills",
        icon: <RedditOutlined />,
        children: [
          {
            key: "7",
            title: "Domain",
          },
          {
            key: "8",
            title: "Industry Knowledge",
          },
          {
            key: "9",
            title: "Languages",
          },
          {
            key: "10",
            title: "Soft Skills",
          },
        ],
      },
    ],
  },
  {
    key: "sub2",
    title: "Roles",
    icon: <UserOutlined />,
    children: [
      {
        key: "4",
        title: "Inbox",
      },
      {
        key: "5",
        title: "Sent",
      },
      {
        key: "6",
        title: "Drafts",
      },
    ],
  },
];
