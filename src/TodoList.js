const TodoList = ({ items = [], onItemClick }) => {
    const handleOnItemClick = (evt, item) => {
        if (item.done) return;

        onItemClick(item, evt);
    };

    return (
        <ul>
            {items.length > 0 &&
                items.map((item) => {
                    const { id, text, done } = item;

                    const isDoneClassName = done ? 'done-text' : '';

                    return (
                        <li key={id} className={isDoneClassName}>
                            <span className={isDoneClassName}> {text} </span>
                            {!done && (
                                <button className="neutral" onClick={() => handleOnItemClick('done', item)}>
                                    Done
                                </button>
                            )}
                            <button
                                className={`delete-neutral ${isDoneClassName}`}
                                onClick={() => handleOnItemClick('delete', item)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
};

export default TodoList;
