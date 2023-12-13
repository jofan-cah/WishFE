import { Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/hooks';
import logo from '@/assets/logo.whk.png';
import logoWidya from '@/assets/logo.widya.png';
import { Card } from 'antd';
import backgroundImage from '@/assets/bb.png';


export function Component() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return (
    <div className='overflow-hidden h-full w-full absolute top-0 left-0 bg-gray-900  text-white'
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '1400px 700px', // Set the fixed size of your image
      // backgroundRepeat: 'no-repeat',
    }}
    >

      <div className='flex flex-col overflow-hidden h-full'>
        <div className='flex-1 flex flex-col items-center justify-center h-full'>
          <Link to='/' className="flex items-center !text-inherit mb-6">
            <img src={logo} className="w-40 mr-2" alt="Logo" />
          </Link>

          <Card className='max-w-full w-80'>
            <Outlet />
          </Card>
        </div>

        <div className="py-4 flex items-center justify-center gap-2 flex-none">
          <span className="text-sm text-gray-600">Made with love by</span>
          <a href="https://widyaimersif.com/" target="_blank" rel="noreferrer">
            <img src={logoWidya} alt="Widya Imersif Teknologi" className="h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
