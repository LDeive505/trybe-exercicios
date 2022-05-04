import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  it('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByText('Adicionar');
    const input = screen.getByLabelText(/tarefa/i);
    const text = 'Limpar o armario';

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    userEvent.type(input, text);
    userEvent.click(button);

    const listItem = screen.getByText(text);
    expect(input).toHaveValue('');
    expect(listItem).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a taks dever adicionar na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
  });
});
