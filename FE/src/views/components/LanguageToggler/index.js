import React, { useState } from 'react';

import { Switch, Typography } from 'antd';

import { useAppContext } from '../../../services/appContext';

import styles from './styles.module.scss';

const { Text } = Typography;

const LanguageToggler = () => {
  const {
    state: { siteLanguage },
    handlers: { setSiteLanguage },
  } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(siteLanguage);

  const handleLanguageToggleChange = (isChecked) => {
    setIsLoading(true);

    const language = isChecked ? 'ar' : 'en';
    setSiteLanguage(language);
    setCurrentLanguage(language);

    setIsLoading(false);
  };

  return (
    <Switch
      loading={isLoading}
      checked={currentLanguage === 'ar'}
      checkedChildren={
        <Text strong className={styles.textWhite}>
          ar
        </Text>
      }
      unCheckedChildren={
        <Text strong className={styles.textWhite}>
          en
        </Text>
      }
      onChange={handleLanguageToggleChange}
    />
  );
};

export default LanguageToggler;
