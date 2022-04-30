import { Fragment } from 'react';

const DoneAllTodo = ({ isAllDone }) => {
    return isAllDone && <Fragment> Yehey All Done! </Fragment>;
};

export default DoneAllTodo;
