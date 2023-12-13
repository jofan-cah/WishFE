import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Component() {
  const navigate = useNavigate();

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
    />
  );
}
