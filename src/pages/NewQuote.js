import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router';

const NewQuote = () => {
    const history = useHistory()

    const addQuoteHandler = data => {
        console.log(data);
        history.push('./quotes')
    }
    return (
            <QuoteForm onAddQuote={addQuoteHandler}/>  
    );
};

export default NewQuote;