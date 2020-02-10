import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import App from './App.js';
import StarWarsCharacters from './components/StarWarsCharacters';

// import { getData as mockGetData } from './api';

// jest.mock('./api');

test('renders App.js', () => {
    render(<App />)
})

test('renders the StarWarsCharacters component with a list of names and two buttons', async () => {
// mockGetData.mockResolvedValueOnce({
//     next: null,
//     prev: null,
//     results: [
//         {
//             name: "First Character",
//             url: "FirstURL"
//         },
//         {
//             name: "Second Character",
//             url: "SecondURL"
//         }
//     ]
// })

    const { getByTestId, getByText } = render(<StarWarsCharacters />);
    const prevButton = getByText(/Previous/i);
    const nextButton = getByText(/Next/i);

    // expect(mockgetData).toHaveBeenCalledTimes(1);
    
    expect(prevButton).toBeDisabled();
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    
    // await wait (() => getByText(/first character/i));
    // await wait (() => getByText(/second character/i));

});

