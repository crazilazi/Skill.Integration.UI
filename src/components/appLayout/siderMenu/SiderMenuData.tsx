import { SiderMenuItem } from "./SiderMenuItem";
import {
  AppstoreAddOutlined,
  UserOutlined,
  RedditOutlined,
  SettingOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";

export const siderMenuData: SiderMenuItem[] = [
  {
    key: "Dashboard",
    title: "Dashboard",
    icon: <AppstoreAddOutlined />,
  },
  {
    key: "Settings",
    title: "Settings",
    icon: <SettingOutlined />,
    children: [
      {
        key: "Plans",
        title: "Plans",
        icon: <FundProjectionScreenOutlined />,
      },
      {
        key: "Skills",
        title: "Skills",
        icon: <RedditOutlined />,
        children: [
          {
            key: "SkillsDomain",
            title: "Domain",
          },
          {
            key: "IndustryKnowledge",
            title: "Industry Knowledge",
          },
          {
            key: "Languages",
            title: "Languages",
          },
          {
            key: "SkillMapping",
            title: "Skill Mapping",
          },
        ],
      },
    ],
  },
  {
    key: "Roles",
    title: "Roles",
    icon: <UserOutlined />,
    children: [
      {
        key: "Inbox",
        title: "Inbox",
      },
      {
        key: "Sent",
        title: "Sent",
      },
      {
        key: "Drafts",
        title: "Drafts",
      },
    ],
  },
  {
    key: "Resource",
    title: "Resource",
    icon: <AppstoreAddOutlined />,
  },
];
