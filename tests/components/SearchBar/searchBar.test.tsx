import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar } from '../../../src/application/components/searchBar/searchBar';
import { vi } from 'vitest';

describe('SearchBar Component', () => {
  it('renders correctly', () => {
    render(<SearchBar onChange={() => {}} />);
    
    const inputElement = screen.getByPlaceholderText('Search a Pokemon...');
    expect(inputElement).toBeInTheDocument();

    const searchIcon = screen.getByAltText('Search Icon');
    expect(searchIcon).toBeInTheDocument();
  });

  it('calls onChange with the correct value when input changes', () => {
    const handleChange = vi.fn();
    render(<SearchBar onChange={handleChange} />);
    
    const inputElement = screen.getByPlaceholderText('Search a Pokemon...');
    fireEvent.change(inputElement, { target: { value: 'Pikachu' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Pikachu');
  });

  it('changes icon class when input is focused and blurred', () => {
    render(<SearchBar onChange={() => {}} />);
    
    const inputElement = screen.getByPlaceholderText('Search a Pokemon...');
    const searchIcon = screen.getByAltText('Search Icon');
    
    expect(searchIcon.className).toContain('search_icon');
    
    fireEvent.focus(inputElement);
    expect(searchIcon.className).toContain('search_icon_active');
    
    fireEvent.blur(inputElement);
    expect(searchIcon.className).toContain('search_icon');
  });

  it('changes input class when input is focused and blurred', () => {
    render(<SearchBar onChange={() => {}} />);
    
    const inputElement = screen.getByPlaceholderText('Search a Pokemon...');
    
    expect(inputElement.className).toContain('search_input');
    
    fireEvent.focus(inputElement);
    expect(inputElement.className).toContain('search_input_active');
    
    fireEvent.blur(inputElement);
    expect(inputElement.className).toContain('search_input');
  });
});
