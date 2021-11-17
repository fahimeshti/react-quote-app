import { useState, useRef } from 'react';
import { Prompt } from 'react-router';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] =useState(false)
  const [isValid, setIsValid] =useState(true)

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    

    if (enteredAuthor!=='' && enteredText!=='') {
      setIsValid(true)
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
    } else {
      setIsValid(false)
    }

  }
  const finishEnteringHandler = () => {
    setIsEntering(false)
  }
  const formFocusHandler = () => {
    setIsEntering(true)
  }
  return (
    <>
    <Prompt when={isEntering} message={(location) => 'Are you sure to leave?'} />
    <Card>
      <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.warning}>
         {!isValid && <p>Please fill in All the Forms!</p>}
        </div>
        <div className={classes.actions}>
          <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </>
  );
};

export default QuoteForm;
