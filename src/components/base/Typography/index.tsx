import { Component } from 'solid-js';

const Typography: Component<{
  children: {};
}> = (props) => {
  const { children } = props;
  return <h1 class='py-3 font-bold mt-2'>{children}</h1>;
};

export { Typography };
