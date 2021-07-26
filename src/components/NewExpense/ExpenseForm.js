import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  //Below is another way of handling multiple state using a single "useState" in which we pass the form input elements as an object.
  //   const [userInput, setUserInput] = useState({
  //     titleInput: "",
  //     amountInput: "",
  //     dateInput: "",
  //   });
  const titleHandler = (event) => {
    setTitleInput(event.target.value);

    //<---Below is a way of handling state if it depends on previous state--->

    // setUserInput({
    //   ...userInput,
    //   titleInput: event.target.value,
    // });

    //<---Below is more efficient way of handling state if it depends on previous state--->

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     titleInput: event.target.value,
    //   };
    // });
  };
  const amountHandler = (event) => {
    setAmountInput(event.target.value);

    //<---Below is a way of handling state if it depends on previous state--->

    // setUserInput({
    //   ...userInput,
    //   amountInput: event.target.value,
    // });

    //<---Below is more efficient way of handling state if it depends on previous state--->

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amountInput: event.target.value,
    //   };
    // });
  };
  const dateHandler = (event) => {
    setDateInput(event.target.value);

    //<---Below is a way of handling state if it depends on previous state--->

    // setUserInput({
    //   ...userInput,
    //   dateInput: event.target.value,
    // });

    //<---Below is more efficient way of handling state if it depends on previous state--->

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     dateInput: event.target.value,
    //   };
    // });
  };
  // This a handler function for form submission.
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };
    props.onSaveExpenseData(expenseData);
    // Below code is called "two-way binding", which basically means that we can accept form data as well as make changes to them.
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={titleInput} onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountHandler}
              value={amountInput}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateHandler}
              value={dateInput}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
