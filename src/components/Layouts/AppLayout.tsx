import { AppstoreAddOutlined, ProfileOutlined, ToolOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { MAIN_PAGE } from '../../helpers/constants/routeConst';

const { Sider, Content } = Layout;

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
  getItem(
    <NavLink to={`${MAIN_PAGE}`}>Turar-joy majmualari</NavLink>,
    'item1',
    <AppstoreAddOutlined rev={undefined} />
  ),
  getItem(
    <NavLink to={`${MAIN_PAGE}`}>Jurnal</NavLink>,
    'item2',
    <ProfileOutlined rev={undefined} />
  ),
  getItem(
    <NavLink to={`${MAIN_PAGE}`}>Quruvchilar</NavLink>,
    'item3',
    <ToolOutlined rev={undefined} />
  ),
];

function AppLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} style={{ background: colorBgContainer }} width={300}>
        <img
          style={{ fontSize: '25px', marginLeft: '20px', marginTop: '20px' }}
          src={Logo}
          alt="Logo"
        />
        <Menu
          style={{ background: colorBgContainer, marginTop: '40px' }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['sub1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
