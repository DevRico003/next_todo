const todoList = [
  { id: 1, task: 'Einkaufen gehen', completed: false },
  { id: 2, task: 'React-App erstellen', completed: true },
  { id: 3, task: 'Übungen für JavaScript machen', completed: false },
];

export default function TodoList() {
  return (
    <div>
      <h1>ToDo-Liste</h1>
      <ul>
        {todoList.map(item => (
          <li key={item.id}>
            {item.task} - {item.completed ? 'Erledigt' : 'Nicht erledigt'}
          </li>
        ))}
      </ul>
    </div>
  );
}
