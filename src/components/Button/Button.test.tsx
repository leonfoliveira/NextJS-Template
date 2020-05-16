import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './index';

it('should render Button', () => {
  const { getByText } = render(<Button text="Texto" />);
  expect(getByText('Texto')).toBeInTheDocument();
});
