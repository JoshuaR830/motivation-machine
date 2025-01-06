import React from 'react';
import { render } from '@testing-library/react';
import CategorySelector from '../src/components/category-selector';

describe('Category Selector', () => {
  it('should display a list of categories', () => {
    const categories = ['Work', 'Personal', 'Fitness'];
    render(<CategorySelector categories={categories} />);

    const categorySelectorElement = document.querySelectorAll('.category-selector')!;
    categorySelectorElement.forEach((element, index) => {
      expect(element).toHaveTextContent(categories[index]);
    })
  });
});