import { render, screen } from '@testing-library/react';
import App from '.';

describe('<Home />', () => { // describe vai listar varios tests pra um determinado hoock
  test('test one', () => { // dentro da função test coloco meus tests
    expect(1).toBe(1);
  });
  test('test two', () => {
    expect(1).toBe(1);
  });
  test('test three', () => {
    expect(1).toBe(1);
  });
});
