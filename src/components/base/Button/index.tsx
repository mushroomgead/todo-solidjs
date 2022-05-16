import { Component } from 'solid-js';

const Button: Component<{
  onClick: Function;
  title?: string;
  style?: string;
  color?: string;
}> = (props) => {
  const { onClick, title, style, color } = props;
  const buttonColor = color || '';
  const baseStyle =
    '  p-1 absolute top-2 rounded-md text-white px-2 py-1 uppercase ';
  const styles = style ? style + baseStyle + buttonColor : baseStyle;

  return (
    <button
      class={styles}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export { Button };
