import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    userEvent.type(input, listTodo[0]);
    userEvent.click(button);
    userEvent.type(input, listTodo[1]);
    userEvent.click(button);
    userEvent.type(input, listTodo[2]);
    userEvent.click(button);
    expect(screen.getByText(listTodo[0])).toBeInTheDocument();
    expect(screen.getByText(listTodo[1])).toBeInTheDocument();
    expect(screen.getByText(listTodo[2])).toBeInTheDocument();
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const task = 'Estudar conteúdos do dia';
    render(<Item content={ task } />);
    expect(screen.getByText(task)).toBeInTheDocument();
  });
});
