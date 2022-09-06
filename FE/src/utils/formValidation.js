export default {
  requiredValidation: (errorMessage = 'This field is required') => [{ required: true, message: errorMessage }],
  arrayValidation: (errorMessage = 'Please select at least one option') => [
    { required: true, type: 'array', min: 1, message: errorMessage },
  ],
  numberValidation: (message, min = 0, maxLimited = false, max = 10000) => {
    const errorMessage = message || `Please input valid amount (${min} - ${max})`;
    const invalidValue = (value) => value === undefined || value === null || value < min || (maxLimited && value > max);

    return [
      {
        required: true,
        message: errorMessage,
        validator: (_, value) => (invalidValue(value) ? Promise.reject(errorMessage) : Promise.resolve()),
      },
    ];
  },
};
