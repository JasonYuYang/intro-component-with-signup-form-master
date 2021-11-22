export const validator = (examValue, examField) => {
  if (examValue.length === 0) return { state: 'ERROR', errMsg: `${examField} cannot be empty!!` };
  if (examField === 'First Name') {
    const regexRules = /^\w+$/;
    return {
      state: regexRules.test(examValue) ? 'SUCCESS' : 'ERROR',
      errMsg: regexRules.test(examValue) ? '' : 'First Name is not valid!!',
    };
  }
  if (examField === 'Last Name') {
    const regexRules = /^\w+$/;
    return {
      state: regexRules.test(examValue) ? 'SUCCESS' : 'ERROR',
      errMsg: regexRules.test(examValue) ? '' : 'Last Name is not valid!!',
    };
  }
  if (examField === 'Email Address') {
    const regexRules = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    return {
      state: regexRules.test(examValue) ? 'SUCCESS' : 'ERROR',
      errMsg: regexRules.test(examValue) ? '' : 'Looks like this is not an email!',
    };
  }
  if (examField === 'Password') {
    const regexRules = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/;
    return {
      state: regexRules.test(examValue) ? 'SUCCESS' : 'ERROR',
      errMsg: regexRules.test(examValue)
        ? ''
        : 'Minimum six characters, at least one uppercase letter, one lowercase letter and one number.',
    };
  }
};
