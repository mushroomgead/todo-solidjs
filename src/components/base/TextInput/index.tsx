import { Component } from 'solid-js';

const TextInput: Component<{
  onInput?: (HTMLInputElement) => Function | void;
  onChange?: (HTMLInputElement) => Function | void;
  value?: Function;
  style?: string;
  placeholder?: string;
}> = (props) => {
  const { onInput, value, onChange, style } = props;
  const baseStyle = '  p-2 focus:outline-0 h-6 w-full ';
  const styles = style ? style + baseStyle : baseStyle;
  return (
    <input
      type='text'
      class={styles}
      onInput={onInput}
      onChange={onChange}
      value={value()}
      {...props}
    />
  );
};

export { TextInput };
