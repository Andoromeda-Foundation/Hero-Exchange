This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Crypto Heart

Tokenize my love to you

# Why there's so many function that return JSX?

We highly agreed with the concept of React that UI is all about data's algebraic projection to the UI.

like: f(data) = UI

In an article posted by React Team, that named [React - Basic Theoretical Concepts](https://github.com/reactjs/react-basic#react---basic-theoretical-concepts), it said:

> The core premise for React is that UIs are simply a projection of data into a different form of data. The same input gives the same output. A simple pure function.

So when the data (a.k.a in React, the `state`) changes, React will listen to the changes and trigger the render function and render a new UI for the current `state`.

