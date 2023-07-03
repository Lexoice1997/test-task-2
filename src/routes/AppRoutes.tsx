import { Button, Layout, Menu, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<NavLink to={`${MAIN_PAGE}`}>Главная</NavLink>, 'sub1', <HomeOutlined rev={undefined} />),
  getItem(<NavLink to={`${MAIN_PAGE}`}>Главная</NavLink>, 'sub1', <HomeOutlined rev={undefined} />),
  getItem(<NavLink to={`${MAIN_PAGE}`}>Главная</NavLink>, 'sub1', <HomeOutlined rev={undefined} />),
];

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  <Layout style={{ minHeight: '100vh' }}>
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: colorBgContainer }}
    >
      <div style={{ fontSize: '25px', marginLeft: '20px', marginTop: '20px' }}>Logo</div>
      <Menu
        style={{ background: colorBgContainer, marginTop: '40px' }}
        theme="light"
        mode="inline"
        defaultSelectedKeys={['sub1']}
        items={items}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined rev={undefined} />
            ) : (
              <MenuFoldOutlined rev={undefined} />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>;
}

export default AppLayout;
