import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';

import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Renders without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Renders with icon', () => {
    renderWithTheme(<TextField icon={<AccountCircle data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField
        icon={<AccountCircle data-testid="icon" />}
        iconPosition="right"
      />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<AccountCircle data-testid="icon" />}
        error="Error message"
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="Label"
        labelFor="Field"
        id="Field"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
    expect(input).toHaveStyle({
      color: '#8F8F8F',
    });

    expect(screen.getByLabelText('Label')).toHaveStyle({
      color: '#8F8F8F',
    });

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField label="Label" labelFor="TextField" id="TextField" disabled />,
    );

    const input = screen.getByLabelText('Label');

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it('Changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />,
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />,
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
