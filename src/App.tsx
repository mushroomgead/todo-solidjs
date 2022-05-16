import { createSignal, JSX, For } from 'solid-js';
import ToDoItem from './components/ToDoItem';
import TextInputWithButton from './components/TextInputWithButton';
import { Container, Typography } from './components/base';
import EmptyState from './components/EmptyState';

const initialData = [];

function App() {
  const [todos, setTodos] = createSignal(initialData);
  const [text, setText] = createSignal('');

  const onInput = (event) => {
    setText(event.currentTarget.value);
  };

  const onAddItem = () => {
    if (text().trim().length > 0) {
      setTodos([...todos(), { key: Math.random(), title: text() }]);
      setText('');
    }
  };

  const onRemoveItem = (key: number) => {
    const modifiedItem = todos().filter((todo) => todo.key !== key);
    setTodos(modifiedItem);
  };

  const onEditItem = (key: number, newValue: string) => {
    const modifiedItem = todos().map((todo) => {
      if (todo.key === key) {
        if (newValue.trim().length > 0) {
          return { ...todo, title: newValue };
        }
      }
      return todo;
    });

    setTodos(modifiedItem);
  };

  return (
    <Container>
      <div class='relative bg-slate-200 px-4 py-6 m-auto shadow-cyan-500/50 rounded-md overflow-y-scroll w-3/5 h-90vh'>
        <TextInputWithButton
          onClick={onAddItem}
          onChange={onAddItem}
          onInput={onInput}
          value={text}
          placeholder='Add new item'
        />
        <Typography>TODOLIST</Typography>
        <For each={todos()} fallback={<EmptyState />}>
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
    </Container>
  );
}

export default App;
