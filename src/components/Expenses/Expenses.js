import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [filterValue, setFilterValue] = useState('2021');
  const [expensesValues, setExpensesValues] = useState([...props.items]);
  //let expensesValues = props.items;

  const selectHandler = (selectedValue) => {
    setFilterValue(selectedValue);

  }

  const expensesFiltered = props.items.filter(item => item.date.getFullYear().toString() === filterValue);

  let expensesContent = <p> No Content Available</p>

  if (expensesFiltered.length > 0) {

    expensesContent = expensesFiltered.map(expense => <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selectedValue={filterValue} onSelect={selectHandler} />
      <ExpensesList expensesFiltered={expensesFiltered} />
    </Card>
  );
}

export default Expenses;
