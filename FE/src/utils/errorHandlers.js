import { showErrorNotification } from '../views/components/NotificationHandler';

// TODO: Add/modify the error handler as needed
export const handleSimpleError = (error) => {
  showErrorNotification(null, error?.response?.data?.message || null);
};
