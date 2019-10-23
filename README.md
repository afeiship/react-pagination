# react-pagination
> A long list can be divided into several pages by Pagination, and only one page will be loaded at a time.

## install
```shell
npm install -S afeiship/react-pagination
```

## usage
1. import css
  ```scss
  @import "~react-pagination/style.scss";

  // customize your styles:
  $react-pagination-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactPagination from 'react-pagination';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactPagination />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-pagination/

## resources
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
