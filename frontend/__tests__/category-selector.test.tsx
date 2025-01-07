import React from 'react';
import { render, screen } from '@testing-library/react';
import CategorySelector from '../src/components/category-selector';

describe('Category Selector', () => {
  const categories = ['Work', 'Personal', 'Fitness'];

  it('should display a list of categories', () => {
    render(<CategorySelector categories={categories} />);

    const headings = screen.getAllByRole('heading', { level: 6 });

    headings.forEach((heading, index) => {
      expect(heading.textContent).toBe(categories[index]);
    });
  });
});