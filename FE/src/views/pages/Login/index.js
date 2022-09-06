import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

import EmptyLayout from '../../layouts/EmptyLayout';
import { Form, Row, Col, Button, Input } from 'antd';

import { loginFormLayout } from '../../../views/layouts/FormLayouts';

import styles from './styles.module.scss';

import formValidation from '../../../utils/formValidation';
import { isSuccessfulRequest } from '../../../utils/apiHelper';
import apis from '../../../apis';
import { useAppContext } from '../../../services/appContext';
import { useNavigate } from 'react-router-dom';
import { handleSimpleError } from '../../../utils/errorHandlers';
import { isEmpty } from 'lodash';
import Path from '../../../path';


const { requiredValidation } = formValidation;


const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const {
    handlers: { logIn, logOut },
  } = useAppContext();

  const {
    state: { siteLanguage, userDetails },
  } = useAppContext();

  const handleFinish = async (values) => {
    setSubmitting(true);

    try {
      const payload = {
        username: values.username,
        password: values.password,
      };

      // const { status, data } = await apis.auth.login(payload);
      const data = {
        auth_token: "LMiaocRZZrTobWsvot9Ckzg1vO5dmnxAciT4sYXrYQ/36tNCY/rkC17ibc5c0LKaeR+joksGSYYgJ/i9ERCEIVrmAXHiwfUdEZ3xpu3DFRGOwreBCC8QsaExhebQFz7E4tQ=",
        expiry: "2022-07-21T16:52:33.326922175Z"
      }
      // if (isSuccessfulRequest(status) && data) {
      //   setSubmitting(false);
      logIn(data);
      //  navigate("/products");
      // }
      navigate("/products");
    } catch (error) {
      setSubmitting(false);
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    if (!isEmpty(userDetails)) {
      navigate(Path.admin.products.root);
    }
  }, [userDetails])

  const LoginContent = () => {
    return (
      <div className={styles.loginContainer}>
        <Form form={form} scrollToFirstError onFinish={handleFinish}>
          <Row gutter={[8, 16]}>
            <Col xs={24}>
              <Form.Item
                {...loginFormLayout}
                name="username"
                id="username"
                label={t('USERNAME')}
                rules={requiredValidation(t('PLEASE_INPUT_YOUR_USERNAME'))}
              >
                <Input placeholder={t('INPUT_USERNAME_HERE')} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                {...loginFormLayout}
                name="password"
                id="password"
                label={t('PASSWORD')}
                rules={requiredValidation(t('PLEASE_INPUT_YOUR_PASSWORD'))}
              >
                <Input.Password placeholder={t('INPUT_PASSWORD_HERE')} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Button block type="primary" htmlType="submit" loading={submitting}>
                {t('LOGIN')}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }

  return (
    <EmptyLayout children={<LoginContent />} />
  );
}

export default Login;
