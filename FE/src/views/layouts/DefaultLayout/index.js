import React from 'react';

import { Layout, BackTop } from 'antd';

import SideNavigationMenu from '../../components/SideNavigationMenu';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardFooter from '../../components/DashboardFooter';

import styles from './styles.module.scss';

/*
  Default Layout, consists of:
  - Simple Header
  - Sidebar with Navigation Menus
  - Main Content
  - Footer

  Reference : https://ant.design/components/layout/#components-layout-demo-top-side-2
*/

const { Header, Content, Footer, Sider } = Layout;

// TODO: Add more layouts depending on needs
const DefaultLayout = ({ children }) => (
  <Layout>
    <Header className={styles.layoutHeader}>
      <DashboardHeader />
    </Header>
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth={0}
        className={styles.layoutSider}
        zeroWidthTriggerStyle={{
          backgroundColor: '#fc264c',
          color: '#ffffff',
        }}
      >
        <SideNavigationMenu />
      </Sider>
      <Content className={styles.fullScreenHeight}>
        <BackTop visibilityHeight={750} duration={700} />
        {children}
      </Content>
    </Layout>
    <Footer className={styles.layoutFooter}>
      <DashboardFooter />
    </Footer>
  </Layout>
);

export default DefaultLayout;
