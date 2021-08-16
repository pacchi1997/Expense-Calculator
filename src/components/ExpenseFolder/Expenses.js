import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {


  const [filteredYear, setFilteredYear] = useState("2021");
  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

const filteredExpense=props.expensesProps.filter(expense=>{
  return expense.date.getFullYear().toString() === filteredYear;
}
);


let expensesComponent=<p style={{color:"wheat"}}>No Expense Found</p>;
if(filteredExpense.length > 0 ){
    expensesComponent = filteredExpense.map((expense) => (
    <ExpenseItems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  }
 

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilterYear={filterYearHandler} />
      <ExpensesChart expenses={filteredExpense}/>
      {expensesComponent}

    </Card>
  );
}

export default Expenses;
