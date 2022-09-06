import React from 'react';
import Path from '../../../path';

import {
  ShopOutlined,
  CopyrightOutlined,
  ClusterOutlined,
  FlagOutlined,
  BookOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  ReconciliationOutlined,
  TagsOutlined,
  TransactionOutlined,
} from '@ant-design/icons';

import styles from './styles.module.scss';

// NOTE : Here, instead of the actual text/title
// We pass the translation key for that string
export const navItems = [
  {
    key: 'product',
    title: 'PRODUCT',
    icon: <ReconciliationOutlined className={styles.navItemIcons} />,
    path: Path.admin.products.root,
  },
  {
    key: 'medical_staff',
    title: 'MEDICAL_STAFF',
    icon: <ShopOutlined className={styles.navItemIcons} />,
    path: Path.admin.medicalStaff.root,
  },
  {
    key: 'staffAvailability',
    title: 'STAFF_AVAILABILITY',
    icon: <ClusterOutlined className={styles.navItemIcons} />,
    path: Path.admin.staffAvailability.root,
  },
  {
    key: 'appointment',
    title: 'APPOINTMENT',
    icon: <CopyrightOutlined className={styles.navItemIcons} />,
    path: Path.admin.appointment.root,
  },
  {
    key: 'orders',
    title: 'ORDERS',
    icon: <BookOutlined className={styles.navItemIcons} />,
    path: Path.admin.orders.root,
  },
  {
    key: 'nurseRequest',
    title: 'NURSE_REQUEST',
    icon: <FlagOutlined className={styles.navItemIcons} />,
    path: Path.admin.nurseRequest.root,
  },
  {
    key: 'banners',
    title: 'BANNERS',
    icon: <ClockCircleOutlined className={styles.navItemIcons} />,
    path: Path.admin.banners.root,
  },
  {
    key: 'settings',
    title: 'SETTINGS',
    icon: <SettingOutlined className={styles.navItemIcons} />,
    path: Path.admin.settings,
  },
];
