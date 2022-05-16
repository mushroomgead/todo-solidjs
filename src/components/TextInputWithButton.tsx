import { Component } from 'solid-js';
import { Button, TextInput } from './base';

const TextInputWithButton: Component<{
  value: Function;
  onClick?: Function;
  placeholder?: string;
  onInput?: (HTMLInputElement) => Function | void;
  onChange?: (HTMLInputElement) => Function | void;
}> = (props) => {
  const { onClick, onInput, value, placeholder, onChange } = props;
  return (
    <div class='bg-white p-3 w-full rounded-md relative'>
      <TextInput
        value={value}
        placeholder={placeholder}
        onInput={onInput}
        onChange={onChange}
      />
      <Button
        style='right-3'
        color='bg-cyan-500'
        onClick={onClick}
        title='add'
      />
    </div>
  );
};

export default TextInputWithButton;
