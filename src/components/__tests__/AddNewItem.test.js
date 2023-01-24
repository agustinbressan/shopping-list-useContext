import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddNewItem from "../AddNewItem"
import { contextProviderWrapper } from '../helpers/contextProviderTestHelpers'

// Given a request to add a new item
// When the description input field is empty
// Then the add item button should be disabled
test('add a new item, with empty description add item button is disabled', () => {
    // NOTE: This test to check for the Add item button disabled/enabled (the next one) are also being tested in the ShoppingList.test suit, but in this case are more like Unit tests for the AddNewItem component

    // ARRANGE
    render(contextProviderWrapper(<AddNewItem />))

    // ACT (No user action)

    // ASSERT
    const addItemButton = screen.getByTitle(/add item/i)
    expect(addItemButton).toBeDisabled()
});

// Given a request to add a new item
// When the description input field is filled
// Then the add item button should be enabled
test('add a new item, with description filled add item button is enabled', () => {
    // ARRANGE
    render(contextProviderWrapper(<AddNewItem />))

    // ACT
    const itemDescriptionInput = screen.getByTitle(/item description/i)
    userEvent.type(itemDescriptionInput, 'Salad')

    // ASSERT
    const addItemButton = screen.getByTitle(/add item/i)
    expect(addItemButton).toBeEnabled()
});

// Given a request to add a new item and the description input field is empty
// When the add item form is submitted
// Then should NOT call the add item context callback
test('add a new item, with empty description DO NOT call the add item context callback', () => {
    // ARRANGE
    const mockAddItemFn = jest.fn()
    render(contextProviderWrapper(<AddNewItem />, {
        addItem: mockAddItemFn
    }))

    // ACT
    const itemDescriptionInput = screen.getByTitle(/item description/i)
    fireEvent.submit(itemDescriptionInput)

    // ASSERT
    expect(mockAddItemFn).not.toHaveBeenCalled()
});

// Given a request to add a new item and the description input field is filled
// When the add item button is clicked
// Then should call the add item context callback and the descriprion field should be clear
test('add a new item, call the add item context callback and clear description field', () => {
    // ARRANGE
    const mockAddItemFn = jest.fn()
    render(contextProviderWrapper(<AddNewItem />, {
        addItem: mockAddItemFn
    }))

    // ACT
    const itemDescriptionInput = screen.getByTitle(/item description/i)
    userEvent.type(itemDescriptionInput, 'Bread')

    const addItemButton = screen.getByTitle(/add item/i)
    userEvent.click(addItemButton)

    // ASSERT
    expect(mockAddItemFn).toHaveBeenCalledWith('Bread')
    expect(itemDescriptionInput).toHaveValue('')
});