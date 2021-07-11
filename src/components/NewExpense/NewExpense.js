import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredData) => {

        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        console.log('expenseData in parent : ', expenseData);
        props.onExpense(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;