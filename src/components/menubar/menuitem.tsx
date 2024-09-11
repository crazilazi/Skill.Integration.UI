export interface MenuItem {
  key: string;
  icon?: React.ReactNode;
  title: string;
  children?: MenuItem[]; // For nested items
}
