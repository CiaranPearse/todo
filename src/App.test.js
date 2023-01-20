import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rootReducer } from './redux/store';
import { createStore } from 'redux';
import App from './App';

describe('Create a store', () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  describe('App boots up', () => {
    let getByLabelText, getByText, container;
    beforeEach(() => {
      ({ getByLabelText, getByText, container } = render(
        <App store={store} />
      ));
    });

    describe('When a todo is added', () => {
      beforeEach(() => {
        fireEvent.change(getByLabelText(/enter todo/i), {
          target: { value: 'My first todo' }
        });
        fireEvent.click(getByText(/add a todo/i));
      });

      test('the todo is visible', () => {
        expect(container).toHaveTextContent('My first todo');
      });

      describe('Awhen completed todos are selected', () => {
        beforeEach(() => {
          fireEvent.click(getByText(/completed/i));
        });

        test('the todo is not visible', () => {
          expect(container).not.toHaveTextContent('My first todo');
        });
      });

      describe('incomplete todos are selected', () => {
        beforeEach(() => {
          fireEvent.click(getByText(/incomplete/i));
        });

        test('the todo is visible', () => {
          expect(container).toHaveTextContent('My first todo');
        });
      });

      describe('another todo is added', () => {
        beforeEach(() => {
          fireEvent.change(getByLabelText(/enter todo/i), {
            target: { value: 'My second todo' }
          });
          fireEvent.click(getByText(/add a todo/i));
        });

        test('both todos are visible', () => {
          expect(container).toHaveTextContent('My first todo');
          expect(container).toHaveTextContent('My second todo');
        });

        describe('when the first todo is clicked on', () => {
          beforeEach(() => {
            fireEvent.click(getByText('My first todo'));
          });

          test('both todos are still visible', () => {
            expect(container).toHaveTextContent('My first todo');
            expect(container).toHaveTextContent('My second todo');
          });

          describe('completed todos are selected', () => {
            beforeEach(() => {
              fireEvent.click(getByText(/completed/i));
            });

            test('the first todo is visible', () => {
              expect(container).toHaveTextContent('My first todo');
              expect(container).not.toHaveTextContent('My second todo');
            });
          });

          describe('incomplete todos are selected', () => {
            beforeEach(() => {
              fireEvent.click(getByText(/incomplete/i));
            });

            test('the second todo is visible', () => {
              expect(container).not.toHaveTextContent('My first todo');
              expect(container).toHaveTextContent('My second todo');
            });
          });
        });
      });
    });
  });
});
