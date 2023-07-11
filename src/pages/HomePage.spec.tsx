import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { format, parseISO } from 'date-fns';

import Home from './index';

import type { ThemeType } from '../styling/theme/default.utils';
import { createTheme } from '../styling/theme/default.utils';
import { useFetchPosts } from './useFetchPosts';
import { getMockDates } from '../lib/posts';

const mockTheme: ThemeType = createTheme('light');
const mockToggleTheme = jest.fn();

const mockedFetch = useFetchPosts as jest.Mock<ReturnType<typeof useFetchPosts>>;

jest.mock('./useFetchPosts');

describe('Home Page', () => {
  describe('With data', () => {
    it('It should display post list', () => {
      const startDate = new Date('2023-01-01');
      const endDate = new Date('2023-01-10');
      const postDates = getMockDates(2, [startDate, endDate]);

      const mockedPostData = [
        {
          date: postDates[0],
          id: '1',
          title: 'Post Example 1',
        },
        {
          date: postDates[1],
          id: '2',
          title: 'Post Example 2',
        },
      ];

      mockedFetch.mockImplementation(() => ({
        isLoading: false,
        isSuccess: true,
        postsData: mockedPostData,
        error: null,
      }));

      const {
        container,
        getByText,
      } = render(
        <ThemeProvider theme={mockTheme}>
          <Home toggleTheme={mockToggleTheme} />
        </ThemeProvider>,
      );

      expect(container.innerHTML)
        .toMatch('Olesia Oleksiuk');

      getByText(mockedPostData[0].title);

      const dataFormatted = format(parseISO(mockedPostData[0].date), 'LLLL d, yyyy');
      getByText(dataFormatted);

      getByText(mockedPostData[1].title);
    });
  });
  describe('With an error', () => {
    it('It should render error message', () => {
      mockedFetch.mockImplementation(() => ({
        isLoading: false,
        postsData: undefined,
        isSuccess: false,
        error: {
          message: 'Unknown error message',
          name: 'Error',
        },
      }));

      const {
        container,
      } = render(
        <ThemeProvider theme={mockTheme}>
          <Home toggleTheme={mockToggleTheme} />
        </ThemeProvider>,
      );

      expect(container.innerHTML)
        .toMatch('Unknown error message');
    });
  });
});

export {};
