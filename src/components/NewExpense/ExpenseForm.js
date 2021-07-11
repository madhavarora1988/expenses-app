import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //alternative approach, maintaining value in one object i.e. one state instead of state slices
    // const [userInput, setUserInput] = useState({enteredTitle:'',enteredAmount:'', enteredDate:'' })

    // const alternateTitleHandler = (event) => {
    //     //console.log(event.target.value);
    //     setUserInput((prevState) =>{
    //         return {...prevState, enteredTitle: event.target.value}
    //     });
    // }

    const titleHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const amountHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__control'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"
                    value={enteredAmount} onChange={amountHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2023-12-31"
                    value={enteredDate}
                    onChange={dateHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>)

}

export default ExpenseForm;