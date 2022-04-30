import { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import DoneAllTodo from './DoneAllTodo';

const sampleData = [
    { id: 1, text: 'This is a sample text', done: false },
    { id: 2, text: 'This is a sample text v2', done: false },
];

function App() {
    const [items, setItems] = useState(() => sampleData);

    const onItemClick = (item, event) => {
        if (typeof event === 'undefined') return;

        let newItems = items;

        if (event === 'done') {
            const findId = items.findIndex(({ id }) => item.id === id);

            const tempItems = [...items];

            tempItems[findId] = {
                ...tempItems[findId],
                done: true,
            };

            newItems = tempItems;
        }

        if (event === 'delete') {
            newItems = items.filter(({ id }) => item.id !== id);
        }

        if (event === 'add' && item.text !== '') {
            const getLastId = items.length && items[items.length - 1].id + 1;
            newItems = [...items, { id: getLastId, ...item }];
        }

        setItems(newItems);
    };

    const isAllDone = items.every((item) => item.done);

    return (
        <div className="container">
            <h2>To Do List</h2>
            <AddTodo onItemClick={onItemClick} />
            <TodoList items={items} onItemClick={onItemClick} />
            <DoneAllTodo items={items} isAllDone={isAllDone} />
        </div>
    );
}

export default App;
