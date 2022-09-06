import React from 'react';
import { notification } from 'antd';

import { i18n } from '../../../i18n';

import styles from './styles.module.scss';

const DEFAULT_NOTIFICATION_KEYS = {
  ERROR: 'error_notification',
  SUCCESS: 'success_notification',
  WARNING: 'warning_notification',
};

const defaultNotificationProps = {
  placement: 'topLeft',
  top: 72,
  bottom: 32,
  duration: 4,
};

export const showErrorNotification = (title = null, content = null, key = null) => {
  notification.error({
    ...defaultNotificationProps,
    rtl: i18n.language === 'ar' ? 'rtl' : 'ltr',
    className: styles.errorNotification,
    key: key ?? DEFAULT_NOTIFICATION_KEYS.ERROR,
    message: title ?? i18n.t('SOMETHING_WENT_WRONG'),
    description: content ?? i18n.t('AN_ERROR_HAS_OCCURRED_PLEASE_TRY_AGAIN_IN_A_FEW_MOMENT'),
  });
};

export const showSuccessNotification = (title = null, content = null, key = null) => {
  notification.success({
    ...defaultNotificationProps,
    rtl: i18n.language === 'ar' ? 'rtl' : 'ltr',
    className: styles.successNotification,
    key: key ?? DEFAULT_NOTIFICATION_KEYS.SUCCESS,
    message: title ?? i18n.t('SUCCESS'),
    description: content ?? '',
  });
};

export const showWarningNotification = (title = null, content = null, key = null) => {
  notification.warning({
    ...defaultNotificationProps,
    rtl: i18n.language === 'ar' ? 'rtl' : 'ltr',
    className: styles.warningNotification,
    key: key ?? DEFAULT_NOTIFICATION_KEYS.WARNING,
    message: title ?? i18n.t('WARNING'),
    description: content ?? '',
  });
};
