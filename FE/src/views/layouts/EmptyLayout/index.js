import React from 'react';

import { Layout } from 'antd';

import DashboardHeader from '../../components/DashboardHeader';

import styles from './styles.module.scss';

/*
  Empty Layout, renders header and children
  Used in Login page for example
*/

const { Header, Content } = Layout;

const EmptyLayout = ({ children }) => (
  <Layout>
    <Header className={styles.layoutHeader}>
      <DashboardHeader />
    </Header>
    <Content className={styles.fullScreenHeight}>{children}</Content>
  </Layout>
);

export default EmptyLayout;
