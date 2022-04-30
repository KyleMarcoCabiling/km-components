import { useState } from 'react';

const AddTodo = ({ onItemClick }) => {
    const [item, setItem] = useState(() => ({
        text: '',
        done: false,
    }));

    const handleChange = (evt) => {
        setItem({
            text: evt.target.value,
            done: false,
        });
    };

    const handleItemClick = (evt) => {
        if (evt.key === 'Enter') {
            onItemClick(item, 'add');
            setItem({
                text: '',
                done: false,
            });
        }
    };

    return (
        <div>
            <input
                onKeyDown={handleItemClick}
                onChange={handleChange}
                value={item.text}
                placeholder="Press enter to add a todo ..."
            />
        </div>
    );
};

export default AddTodo;
