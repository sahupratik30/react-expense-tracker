import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "./../UI/Card";
const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    const recievedExpenseData = {
      ...expenseData,
      id: Date.now(),
    };
    setFormActive(false);
    props.onExpense(recievedExpenseData);
  };
  const formHandler = () => {
    setFormActive(true);
  };
  const cancelHandler = () => {
    setFormActive(false);
  };
  return (
    <Card className="new-expense">
      {!formActive && <button onClick={formHandler}>Add New Expense</button>}
      {formActive && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
