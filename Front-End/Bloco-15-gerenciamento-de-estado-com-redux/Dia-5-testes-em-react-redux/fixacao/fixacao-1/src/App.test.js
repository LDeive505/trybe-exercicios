import React from 'react'
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRedux from './renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);

  it('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('the page should has a value 1 after a click, and 3 after more 2 clicks', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

 
/*   it('the page should have the value 10', () => {
    const initialState = {
      clickReducer: {
        counter: 10
      }
    };
    renderWithRedux(<App />, initialState);

    expect(screen.getByText('10')).toBeInTheDocument();
  });  */
});