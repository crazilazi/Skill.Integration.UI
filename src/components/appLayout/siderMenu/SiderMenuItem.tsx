export interface SiderMenuItem {
  key: string;
  icon?: React.ReactNode;
  title: string;
  children?: SiderMenuItem[]; // For nested items
}

export function MenuLayoutStyles() {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#d9d9d9",
  };

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
  return { layoutStyle, headerStyle, siderStyle, contentStyle, footerStyle };
}
