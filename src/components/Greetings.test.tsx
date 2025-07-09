import { test, expect } from 'vitest'; // 👈 Add this line
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greetings from './Greetings';

test('renders greeting with provided name', () => {
    render(<Greetings name='Test User' />);
    expect(screen.getByText('Hello , Test User!')).toBeInTheDocument();
});

test('renders greeting with default name if no name is provided', () => {
    render(<Greetings />);
    expect(screen.getByText('Hello , Guest!')).toBeInTheDocument();
});
