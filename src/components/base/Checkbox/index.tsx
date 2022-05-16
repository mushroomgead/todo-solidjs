import { Component } from 'solid-js';

const Checkbox: Component<{
  value: string;
  id: string;
  name: string;
}> = (props) => {
  const { value, id, name } = props;
  return <input type='checkbox' id={id} name={name} value={value} />;
};

export default Checkbox;
