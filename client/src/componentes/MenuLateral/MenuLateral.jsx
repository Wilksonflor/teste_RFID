import { useState } from "react";
import { Home } from "../../Pages/Home/Home";
import { Cadastro } from "../../Pages/Cadastro/Cadastro";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Routes, Route, Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const MenuLateral = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h3>Logo</h3>
        </div>

        <Menu
          style={{ height: "100vh", marginTop: "30px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to={"/"}>Início</Link>
          </Menu.Item>
          <SubMenu key="2" icon={<CarOutlined />} title="Cadastro">
            <Menu.Item key="2-1" icon={<PlusOutlined />}>
              <Link to={"/cadastro"}>Cadastrar carros</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: "0" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              // fontSize: "",
              width: 50,
              height: 50,
              background: "#fff",
            }}
            className="ButtonMenu"
          />
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuLateral;
