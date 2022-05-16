import { Component, createSignal, Show } from 'solid-js';
import { Button, TextInput } from './base';

const ToDoItem: Component<{
  key: number;
  title: string;
  handleOnRemoveItem: (key: number) => void;
  handleOnEditItem: (key: number, newValue: string) => void;
}> = ({ key, title, handleOnRemoveItem, handleOnEditItem }) => {
  const [mode, setMode] = createSignal('view');
  const [text, setText] = createSignal('');

  const handleOnChangeText = (event) => {
    setText(event.currentTarget.value);
  };

  return (
    <div class='flex justify-between my-2 items-center py-2'>
      <Show when={mode() === 'view'}>
        <h1>{title}</h1>
        <div class='flex'>
          <button
            class='mr-4'
            onClick={() => {
              setMode('edit');
              setText(title);
            }}
          >
            <img src='/src/assets/icons/edit.svg'></img>
          </button>
          <button class='' onClick={() => handleOnRemoveItem(key)}>
            <img src='/src/assets/icons/trash.svg'></img>
          </button>
        </div>
      </Show>
      <Show when={mode() === 'edit'}>
        <TextInput
          value={text}
          onChange={handleOnChangeText}
          style='mr-5 h-full rounded-md'
        />
        <div class='flex'>
          <Button
            title='ok'
            color='bg-green-600'
            style='relative mr-4 top-0'
            onClick={() => {
              setMode('view');
              handleOnEditItem(key, text());
            }}
          />
          <Button
            title='cancel'
            color='bg-rose-600 top-0'
            style='relative'
            onClick={() => setMode('view')}
          />
        </div>
      </Show>
    </div>
  );
};

export default ToDoItem;
