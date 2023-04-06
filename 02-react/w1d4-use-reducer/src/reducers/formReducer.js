const EMAIL_REGEX = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
const PASSWORD_REGEX = new RegExp(
  '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
);

const initialFormState = {
  firstName: {
    value: '',
    error: '',
  },
  lastName: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
  confirmPassword: {
    value: '',
    error: '',
  },
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'firstName':
      let firstNameError =
        payload.length < 2 ? 'First name must be at least 2 characters.' : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: firstNameError,
        },
      };
    case 'lastName':
      let lastNameError =
        payload.length < 2 ? 'Last name must be at least 2 characters.' : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: lastNameError,
        },
      };
    case 'email':
      let emailError = !String(payload).match(EMAIL_REGEX)
        ? 'Please enter a valid email address.'
        : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: emailError,
        },
      };
    case 'password':
      let passwordError = !String(payload).match(PASSWORD_REGEX)
        ? '8 characters, 1 lowercase, 1 uppercase, special characters allowed.'
        : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: passwordError,
        },
      };
    case 'confirmPassword':
      let confirmPasswordError = !String(payload).match(state.password.value)
        ? 'Passwords do not match.'
        : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: confirmPasswordError,
        },
      };
    case 'formSubmission':
      return initialFormState;
    default:
      console.error('Unexpected action type.');
      return { ...state };
  }
};

export { initialFormState, formReducer };
