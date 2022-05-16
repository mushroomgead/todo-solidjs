import { Component } from 'solid-js';

const Container: Component<{
  children: {};
}> = (props) => {
  const { children } = props;
  return (
    <div class='container m-auto h-screen flex items-center'>{children}</div>
  );
};

export default Container;
