import { act, render, screen } from '@testing-library/react';
import ListPost from './list-post';

global.fetch = jest.fn();
describe('ListPost', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Render list post with enough items', async () => {
    const mockData = [{ id: 1, title: 'title', author: 'author', content: 'hello' }];
    const mockResponse = {
      status: 200,
      json: jest.fn().mockResolvedValue(mockData),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    await act(() => {
      render(<ListPost />)
    })
    const items = await screen.findAllByRole('listitem');
    expect(items.length).toBe(1);
    expect(items[0].innerHTML).toContain('hello');
  });
});