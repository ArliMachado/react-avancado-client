import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: '',
    },
    disabled: {
      type: 'boolean',
    },
  },
} as Meta;

export const Default: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const withIcon: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withIcon.args = {
  label: 'E-mail',
  icon: <AccountCircle />,
  iconPosition: 'left',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'john.cage@gmail.com',
};

export const withError: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  label: 'E-mail',
  icon: <AccountCircle />,
  iconPosition: 'left',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'john.cage@gmail.com',
  error: 'Ops..something is wrong',
};
