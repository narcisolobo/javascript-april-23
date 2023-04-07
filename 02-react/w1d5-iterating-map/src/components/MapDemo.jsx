const todos = [
  { id: crypto.randomUUID(), text: 'clean room' },
  { id: crypto.randomUUID(), text: 'take out trash' },
  { id: crypto.randomUUID(), text: 'date Janelle Monae' },
  { id: crypto.randomUUID(), text: 'buy eggs' },
];

function MapDemo() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default MapDemo;
