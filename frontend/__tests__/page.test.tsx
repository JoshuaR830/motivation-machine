import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
    it('should render the page heading', () => {
        render(<Page/>);
        const heading = screen.getByText('Motivation Machine');
        expect(heading).toBeInTheDocument();
    });
});