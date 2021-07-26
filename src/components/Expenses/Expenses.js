import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [inputYear, setInputYear] = useState("2022");
  const filterHandler = (year) => {
    setInputYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === inputYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={inputYear} onChangeFilter={filterHandler} />
      {filteredExpenses.length > 0 && (
        <ExpensesChart expenses={filteredExpenses} />
      )}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
