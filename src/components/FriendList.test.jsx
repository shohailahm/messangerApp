import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FriendList from "./FriendList";
import useFriendsStore from "../store/messages";

// Mocking the useFriendsStore hook
jest.mock("../store/messages", () => ({
    __esModule: true,
    default: jest.fn(() => ({
      friendsList: [
        { id: 1, name: "Friend 1" },
        { id: 2, name: "Friend 2" },
      ],
      activeFriend: {},
      setActiveFriend: jest.fn(),
    })),
  }));
  

describe("FriendList component", () => {
    beforeEach(() => {
        useFriendsStore.mockImplementation(() => ({
            friendsList: [
                { id: 1, name: "Friend 1" },
                { id: 2, name: "Friend 2" },
              ],
              activeFriend: {},
              setActiveFriend: jest.fn(),
        }));
    
        
      });
  test("renders friend list with select element", () => {
    const { getByText, getByPlaceholderText } = render(<FriendList />);
    const warningElement = getByText("Please select a friend to start chatting");
    const selectElement = getByPlaceholderText("Select Friend");
    
    expect(warningElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });



});
