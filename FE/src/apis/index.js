import http from '../services/http';

const handleErrors = (err /* path  payload */) => {
  const errorMessageKey = err.response?.data?.error.Message
  return { error: errorMessageKey }
}

const getRequest = async (path) => {
  try {
    return await http.get(path)
  } catch (err) {
    return handleErrors(err)
  }
}

const postRequest = async (path, payload) => {
  try {
    const res = await http.post(path, payload)
    return res
  } catch (err) {
    return handleErrors(err)
  }
}

const putRequest = async (path, payload) => {
  try {
    const res = await http.put(path, payload)
    return res
  } catch (err) {
    return handleErrors(err)
  }
}

const patchRequest = async (path, payload) => {
  try {
    return await http.patch(path, payload)
  } catch (err) {
    return handleErrors(err)
  }
}

const deleteRequest = async (path) => {
  try {
    return await http.delete(path)
  } catch (err) {
    return handleErrors(err)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: {
    login: (payload) => postRequest('/auth/login', payload),
    getTokenData: () => postRequest('/auth/getTokenData'),
  },
  company: {
    getAllCompany: () => getRequest('/company/'),
    getCompanyDetail: (companyId) => getRequest(`/company/${companyId}`),
    createNewCompany: (companyName) => postRequest(`/company/`, companyName),
  },
  partner: {
    getAllPartner: () => getRequest('/partner/'),
    getPartnerDetail: (partnerId) => getRequest(`/partner/list?id=${partnerId}`),
    createNewPartner: (partnerName) => postRequest(`/partner/`, partnerName),
  },
  user: {
    getAllUser: (page, limit, orderBy, sort, active) => getRequest(`/user/?page=${page}&limit=${limit}&order_by=${orderBy}&sort=${sort}&active=${active}`),
    searchUser: (text, page, limit, orderBy, sort, active) => getRequest(`/user/search?text=${text}&page=${page}&limit=${limit}&order_by=${orderBy}&sort=${sort}&active=${active}`),
    registerUser: (userData) => postRequest(`/auth/register`, userData),
    updateUser: (userData) => putRequest(`/user/`, userData),
    deleteUser: (userId) => deleteRequest(`/user/delete/${userId}`),
    getUserDetail: (userId) => getRequest(`/user/${userId}`),
  },
  shipping: {
    getAllShipping: (partnerId, page, limit, orderBy, sort, active) => getRequest(`/shipping/?partner_id=${partnerId}&page=${page}&limit=${limit}&order_by=${orderBy}&sort=${sort}&active=${active}`),
    getShippingDetail: (partnerId, shippingId) => getRequest(`/shipping/detail?partner_id=${partnerId}&shipping_id=${shippingId}`),
    getShippingStatus: (partner, mpsId, zipCode) => getRequest(`/shipping/status?partner=${partner}&mps_id=${mpsId}&zip_code=${zipCode}`),
    createShippingDPD: (partnerName, DPDData) => postRequest(`/shipping/${partnerName}`, DPDData),
  }
};
