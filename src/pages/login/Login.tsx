import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../../assets/login.png';
import { MAIN_PAGE } from '../../helpers/constants/routeConst';
import styles from './Login.module.css';
import { useLogin, useRegister } from './loginHooks/loginHooks';

function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const { loginFn } = useLogin();
  const { registerFn } = useRegister();

  const onFinishRegister = (values: { phone: string }) => {
    setVisible((prev) => !prev);
    setPhone(values.phone);
    registerFn.mutate({ phone: values.phone });
  };

  const onFinishLogin = (values: { sms_code: number }) => {
    console.log('Success:', values);
    loginFn.mutate({ sms_code: values.sms_code, phone });
  };

  if (loginFn.isSuccess) {
    navigate(`${MAIN_PAGE}`);
  }

  return (
    <div className={styles.login}>
      <img src={Img} alt="login" className={styles.img} />
      <div className={styles.block}>
        <p>Xush kelibsiz!</p>
        <h2>Kirish</h2>
        {!visible && (
          <Form
            name="login"
            layout="vertical"
            size="large"
            initialValues={{ remember: true }}
            onFinish={onFinishRegister}
            autoComplete="off"
          >
            <Form.Item
              label="Telefon raqam"
              name="phone"
              rules={[
                { required: true, message: 'Пожалуйста напишите свой телефон!' },
                { min: 13, message: 'Номер должен быть не меньше 13 символов' },
                { max: 13, message: 'Номер должен быть не больше 13 символов' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Kirish
              </Button>
            </Form.Item>
          </Form>
        )}
        {visible && (
          <Form
            name="login"
            layout="vertical"
            size="large"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinishLogin}
            autoComplete="off"
          >
            <Form.Item
              label={`Tasdiqlash kodini kiriting
              ${phone} raqamiga SMS xabar orqali tasdiqlash kodi yuborildi`}
              name="sms_code"
              rules={[{ required: true, message: 'Пожалуйста напишите смс код!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Kirish
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Login;
