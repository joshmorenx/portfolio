import React from 'react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DesktopNavbar from '../src/components/DesktopNavbar';

test('renders the DesktopNavbar component', () => {
    render(<DesktopNavbar navbarStyleDesktop={{}} />);
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
})