import * as yup from 'yup';

const letersRegex =
  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\u0400-\u04ff\s]*)$/gi;

const numberRedex = /^NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/;

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(
    letersRegex,
    'The name should have only english alphabets'
  );
});

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(numberRedex, 'The number should have digits only');
});

export const schema = yup.object().shape({
  name: yup.string().min('3').leters().required('Please enter your name!'),

  number: yup
    .string()
    .min('3')
    .max('19')
    .numeric()
    .required('Please enter your number!'),
});
///^\d+$/
