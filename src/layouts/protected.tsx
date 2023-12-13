import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Button, Dropdown, Layout, Spin } from 'antd';
import { MdDashboard, MdLogout, MdPerson } from 'react-icons/md';
import { useAuth, useLogout } from '@/hooks';
import logo from '@/assets/logo.whk.png';

export function Component() {
  const { isAuthenticated, user } = useAuth();
  const { logout, loading } = useLogout();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Layout className='h-full absolute w-full overflow-hidden top-0 left-0'>
      <Layout.Header
        className='!flex-none !bg-white flex justify-between !h-20 items-center !px-4 border-b'
      >
        <Link to='/' className="flex items-center !text-inherit">
          <img src={logo} className="m-7 w-32" alt="Logo" />
        </Link>
        <div className='m-7'>
          <Dropdown
            menu={{
              items: [
                {
                  key: 'dashboard',
                  icon: <MdDashboard />,
                  label: 'Dashboard',
                  onClick: () => {
                    navigate('/dashboard');
                  },
                },
             
                {
                  key: 'logout',
                  icon: <MdLogout />,
                  label: 'Logout',
                  onClick: async () => {
                    await logout();
                    navigate('/login');
                  },
                },
              ]
            }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Button type="text" className='!px-2 !flex items-center'>
              <Avatar
                size="small"
                className='!bg-primary-100 !text-primary-500 !flex justify-center items-center'
                icon={<MdPerson />}
              />
              <span className='ml-2'>
                {user?.name}
              </span>
            </Button>
          </Dropdown>
        </div>
      </Layout.Header>
      <Layout.Content className='flex-1 overflow-auto'>
        <Spin spinning={loading} tip="Loading" wrapperClassName='h-full w-full' size="large">
          <Outlet />
        </Spin>
      </Layout.Content>
    </Layout>
  );
}
