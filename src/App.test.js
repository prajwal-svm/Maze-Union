import { render, screen } from '@testing-library/react';
import MazeUnion from './MazeUnion';

test('renders learn react link', () => {
  render(<MazeUnion />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
