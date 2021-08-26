import ErrorRepository from '../app';

const err = new ErrorRepository();

test('Unknown error', () => {
  expect(err.translate('8')).toBe('Unknown error');
});

test('known error', () => {
  expect(err.translate('1')).toBe('игра не существует');
});
