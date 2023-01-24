import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShoppingList from '../ShoppingList'
import { contextProviderWrapper } from '../helpers/contextProviderTestHelpers'

// Given no initial user interaction
// When the shopping list init
// Then the items list should be empty
test('initial state, empty list', () => {
    // ARRANGE
    render(contextProviderWrapper(<ShoppingList />, {
        items: [],
    }))

    // ACT (No user action)

    // ASSERT
    const emptyItemListMessage = screen.getByText(/The item list is empty./i)
    expect(emptyItemListMessage).toBeInTheDocument()
});

// Given no initial user interaction
// When the shopping list init
// Then the Items list title counters values should show (0/0)
test('initial state, zero counter values', () => {
    // ARRANGE
    render(contextProviderWrapper(<ShoppingList />, {
        items: [],
    }))

    // ACT (No user action)
    
    // ASSERT
    const itemsListTitle = screen.getByText(/Items \(0\/0\)/i)
    expect(itemsListTitle).toBeInTheDocument()
});

// Given the description input field empty
// When the add item button is clicked
// Then new item should NOT be added and the button should be disabled
test('add new item, click add with empty description', () => {
    // ARRANGE
    render(contextProviderWrapper(<ShoppingList />, {
        items: [],
    }))

    // ACT
    const addItemButton = screen.getByTitle(/add item/i)
    userEvent.click(addItemButton)

    // ASSERT
    const emptyItemListMessage = screen.getByText(/The item list is empty./i)
    expect(emptyItemListMessage).toBeInTheDocument()
    expect(addItemButton).toBeDisabled()
});

// Given the description input field empty
// When the add item form is submitted
// Then new item should NOT be added and the button should be disabled
test('add new item, submit form with empty description', () => {
    // ARRANGE
    render(contextProviderWrapper(<ShoppingList />, {
        items: [],
    }))

    // ACT
    const itemDescriptionInput = screen.getByTitle(/item description/i)
    fireEvent.submit(itemDescriptionInput)
    // NOTE: The form can also be submitted with an Enter keyDown event -> fireEvent.keyDown(itemDescriptionInput, {key: 'Enter', code: 'Enter', charCode: 13})

    // ASSERT
    const emptyItemListMessage = screen.getByText(/The item list is empty./i)
    expect(emptyItemListMessage).toBeInTheDocument()

    const addItemButton = screen.getByTitle(/add item/i)
    expect(addItemButton).toBeDisabled()
});

// Given a request to Add a new item
// When the description input field is filled
// Then the Add item button should be enabled
test('add new item description text, button is enabled', () => {
    // ARRANGE
    render(contextProviderWrapper(<ShoppingList />, {
        items: [],
    }))

    // ACT
    const itemDescriptionInput = screen.getByTitle(/item description/i)
    userEvent.type(itemDescriptionInput, 'Bananas')

    // ASSERT
    const addItemButton = screen.getByTitle(/add item/i)
    expect(addItemButton).toBeEnabled()
});