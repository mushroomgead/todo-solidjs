import { Component, createSignal, Show, JSX } from 'solid-js';

export interface ToDoItemProps {
  key: number;
  title: string;
  handleOnRemoveItem: (key: number) => void;
  handleOnEditItem: (key: number, newValue: string) => void;
}

const ToDoItem: Component<ToDoItemProps> = ({
  key,
  title,
  handleOnRemoveItem,
  handleOnEditItem,
}) => {
  const [mode, setMode] = createSignal('view');
  const [text, setText] = createSignal('');

  const handleOnChangeText: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    event
  ) => {
    setText(event.currentTarget.value);
  };

  return (
    <div>
      <Show when={mode() === 'view'}>
        <h1>{title}</h1>
        <button onClick={() => handleOnRemoveItem(key)}>x</button>
        <button
          onClick={() => {
            setMode('edit');
            setText(title);
          }}
        >
          edit
        </button>
      </Show>
      <Show when={mode() === 'edit'}>
        <input type='text' value={text()} onChange={handleOnChangeText} />
        <button
          onClick={() => {
            setMode('view');
            handleOnEditItem(key, text());
          }}
        >
          ok
        </button>
        <button onClick={() => setMode('view')}>cancel</button>
      </Show>
    </div>
  );
};

export default ToDoItem;
