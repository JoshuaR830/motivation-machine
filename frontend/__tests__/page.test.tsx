import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
    it('should render the page', () => {
        render(<Page/>);

        const heading = screen.getByText('Motivation Machine');
        // const heading = screen.getByRole('heading', { level: 6, name: 'Motivation Machine' });

        expect(heading).toBeInTheDocument();
    });
});