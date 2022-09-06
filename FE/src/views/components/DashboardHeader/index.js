import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PageHeader, Button, Typography, Space } from 'antd';

import Path from '../../../path';

import LanguageToggler from '../LanguageToggler';

import { useAppContext } from '../../../services/appContext';

import styles from './styles.module.scss';

const { Text } = Typography;

const DashboardHeader = () => {
  const {
    state: { userDetails },
    handlers: { logOut },
  } = useAppContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogOutClicked = () => {
    logOut();
    navigate(Path.admin.login);
  };

  // TODO: Right now only the picker page is public, adjust this when other public page is available
  // const inPublicPage = () => window.location.pathname.includes('picker');

  // TODO: Put Jumlaty Logo in this header
  return (
    <PageHeader
      className={styles.dashboardHeader}
      ghost={false}
      backIcon={false}
      title={<Text className={styles.headerSubtitle}>{t('UBERDOCTOR_ADMIN_DASHBOARD')}</Text>}
      extra={
        <Space size="large">
          <LanguageToggler />
          {userDetails && (
            <Button danger type="primary" onClick={handleLogOutClicked}>
              {t('LOG_OUT')}
            </Button>
          )}
        </Space>
      }
    />
  );
};

export default DashboardHeader;
