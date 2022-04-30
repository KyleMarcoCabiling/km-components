import { Fragment } from 'react';

const DoneAllTodo = ({ items, isAllDone }) => {
    return (
        <Fragment>
            {items.length < 1 ? 'Nothing much here' : isAllDone ? 'Yehey All Done!' : 'Add more todos'}
        </Fragment>
    );
};

export default DoneAllTodo;
