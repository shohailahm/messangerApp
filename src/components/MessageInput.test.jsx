import React from 'react';
import { render, fireEvent,act, waitFor } from '@testing-library/react';
import MessageInput from './MessageInput';
import useFriendsStore from '../store/messages';

// Mocking the useFriendsStore hook
jest.mock('../store/messages', () => ({
  __esModule: true,
  default: jest.fn(),
  useShallow: jest.fn(),
}));

describe('MessageInput component', () => {
  beforeEach(() => {
    useFriendsStore.mockImplementation(() => ({
      activeFriend: { id: 1, name: 'Test Friend' },
      addMessages: jest.fn(),
    }));

    
  });

  test('renders message input and send button', () => {
    const { getByPlaceholderText, getByText } = render(<MessageInput />);
    const inputElement = getByPlaceholderText('Message Test Friend');
    const sendButton = getByText('Send');
    expect(inputElement).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  test('handles message change', () => {
    const { getByPlaceholderText } = render(<MessageInput />);
    const inputElement = getByPlaceholderText('Message Test Friend');
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    expect(inputElement.value).toBe('Hello, World!');
  });


});
