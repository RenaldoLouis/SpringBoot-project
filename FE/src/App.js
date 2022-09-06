import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import arEG from 'antd/lib/locale/ar_EG';

import { useAppContext } from './services/appContext';

import Login from './views/pages/Login';

import Settings from './views/pages/Settings';
import Products from './views/pages/Products';
import MedicalStaff from './views/pages/MedicalStaff';
import StaffAvailability from './views/pages/StaffAvailability';
import Appointment from './views/pages/Appointment';
import Orders from './views/pages/Orders';
import NurseRequest from './views/pages/NurseRequest';
import Banners from './views/pages/Banners';
import PrivateRoute from './views/route/PrivateRoute';
import PublicRoute from './views/route/PublicRoute';
import Path from './path';

const Main = () => {
  return (
    <Routes>
      <Route path={Path.admin.login} element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={Path.admin.products.root} element={<Products />} />
        <Route path={Path.admin.medicalStaff.root} element={<MedicalStaff />} />
        <Route path={Path.admin.staffAvailability.root} element={<StaffAvailability />} />
        <Route path={Path.admin.appointment.root} element={<Appointment />} />
        <Route path={Path.admin.orders.root} element={<Orders />} />
        <Route path={Path.admin.nurseRequest.root} element={<NurseRequest />} />
        <Route path={Path.admin.banners.root} element={<Banners />} />
        <Route path={Path.admin.settings} element={<Settings />} />
      </Route>
      <Route path="*" element={<PublicRoute />} />
    </Routes>
  );
}

const App = () => {
  const {
    state: { siteLanguage, userDetails },
  } = useAppContext();

  console.log(siteLanguage)

  return (
    <ConfigProvider direction={siteLanguage === 'ar' ? 'rtl' : 'ltr'} locale={siteLanguage === 'ar' ? arEG : enUS}>
      <Router>
        <Main />
      </Router>
    </ConfigProvider>
  );
};

export default App;
