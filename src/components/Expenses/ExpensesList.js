import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.expensesFiltered.length === 0) {
        return <p>No Content Found</p>
    }

    const expensesContent = props.expensesFiltered.map(expense => <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
    />)

    return (<ul>{expensesContent}</ul>)
}

export default ExpensesList;