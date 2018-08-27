Budget Tracker - Part 3 (Async Actions)
===

## Submission Instructions

* continue working on the fork you created from Part 2
* open a **new branch** for today's assignment
* upon completion, create a **new pull request** in github
* submit a link to your PR in canvas

## Requirements  

Change your project to use async actions that communicate data changes to the server.

1. On all your `actions.test.js`, change to `it.skip`
    - We will learn how to test on Monday
1. Add a service module for making API calls
    - Create firebase.json calls for each need action:
        - `GET /categories.json`
        - `POST /categories.json`
        - `PUT /categories/<key>.json`
        - `DELETE /categories/<key>.json`
        - `POST /categories/<key>/expenses.json`
        - `PUT /categories/<key>/expenses/<expenseKey>.json`
        - `DELETE /categories/<key>/expenses/<expenseKey>.json`
    - In the app, create a service method for each needed call (addCategory, addExpense, etc. etc.)
    - **IMPORTANT!** You will need to update your reducer to convert `category.expenses` from an object to an array!
    - Use `superagent` (or `fetch`) to do AJAX
1. Add redux middleware
    - Add `thunk` _if needed_ (probably not) to compare to prior state
    _ Add `promise` middleware to simplify Promise-based actions and centralize loading and errors
    - Use `compose` to maintain redux dev tools (see class example)
1. Modify all the action creators to be async
1. Track loading state and display in a `Loading` component
1. Track error state for any async errors and display in a `Error` component

## Rubric

- service api **3pts**
- convert to async actions **10pts**
- handle errors **4pts**
- handle loading **3pts**
