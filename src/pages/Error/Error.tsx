import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist. Please reload page"
      />
      <Button
        type="primary"
        size="large"
        onClick={() => navigate('/login')}
        style={{ textAlign: 'center', margin: '0 auto' }}
      >
        Логин
      </Button>
    </div>
  );
}

export default ErrorPage;
