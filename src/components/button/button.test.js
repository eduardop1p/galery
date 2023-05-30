// só pra constar que toda vez que escrevemos códigos e vemos ele na tela estamos fazendo tests

import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  test('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'mongoAgajota');
  });
});
