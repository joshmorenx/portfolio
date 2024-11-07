import React from 'react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders the Header component', () => {
    render(<Header />);
    expect(screen.getByText(/portfolio header/i)).toBeInTheDocument();
});
