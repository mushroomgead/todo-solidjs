import { createSignal, JSX, For } from 'solid-js';
import ToDoItem from './components/ToDoItem';

function App() {
  const [todos, setTodos] = createSignal([]);
  const [text, setText] = createSignal('');

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    setText(event.currentTarget.value);
  };

  const onAddItem = () => {
    if (text().trim().length > 0) {
      setTodos([...todos(), { key: Math.random(), title: text() }]);
      setText('');
    }
  };

  const onRemoveItem = (key) => {
    const modifiedItem = todos().filter((todo) => todo.key !== key);
    setTodos(modifiedItem);
  };

  const onEditItem = (key, newValue) => {
    const modifiedItem = todos().map((todo) => {
      if (todo.key === key) {
        return { ...todo, title: newValue };
      }
      return todo;
    });

    setTodos(modifiedItem);
  };

  return (
    <div>
      <input onInput={onInput} value={text()} />
      <button onClick={onAddItem}>add</button>
      <For each={todos()} fallback={null}>
        {({ key, title }) => {
          return (
            <ToDoItem
              key={key}
              title={title}
              handleOnRemoveItem={onRemoveItem}
              handleOnEditItem={onEditItem}
            />
          );
        }}
      </For>
    </div>
  );
}

export default App;
