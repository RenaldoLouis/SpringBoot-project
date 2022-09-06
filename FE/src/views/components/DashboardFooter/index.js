import React from 'react';
import { useTranslation } from 'react-i18next';

import { Row, Col, Typography } from 'antd';

import styles from './styles.module.scss';

const { Text } = Typography;

const DashboardFooter = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center">
      <Col>
        <Text className={styles.footerText}>{t('FOOTER_TEXT')}</Text>
      </Col>
    </Row>
  );
};

export default DashboardFooter;
