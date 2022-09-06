// Craco Config to customize Antd Theme
// Variables Reference: https://ant.design/docs/react/customize-theme#Ant-Design-Less-variables

const CracoAntdPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntdPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#fc264c',
          '@link-color': '#1890ff',
        },
      },
    },
  ],
};
