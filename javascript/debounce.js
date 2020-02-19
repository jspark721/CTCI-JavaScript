/* debouncing is a programming practice to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page -- it limits the rate at which a function gets invoked.

example: if a user is typing in an input field and we want a function to run, we don't want the function to fire everytime the user is typing a letter (adjflah) we only want it to run when the user is done typing

debouncing is used to improve browser performance -- there might be some functionality in a webpage which requires time-consuming computations 

if such a method is invoked frequently, it might greatly affect the performance of the browser, as JS is a single threaded langauge 

debouncing limits the rate at which a function gets invoked

example: autocomplete search, we want to debounce it when someone stops typing after 500ms

*/

// implement debounce

const debounce = (fn, time) => {
    let timeout;

    return function(...args) {
        const functionCall = () => fn.apply(this, args);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

// another way to implement debounce

function debounce2(fn, time) {
    let setTimeoutId;

    return function() {
        if(setTimeoutId) {
            clearTimeout(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null
        }, time);
    }
}

//how to implement throttle
//instead of clearing the timeout, just return something

function throttle(fn, time) {
    let setTimeoutId;

    return function() {
        if(setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null
        }, time);
    }
}
