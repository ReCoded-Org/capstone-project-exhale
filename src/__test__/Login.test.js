import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../containers/Login';
import {BrowserRouter} from 'react-router-dom' ;
it('renders correctly', () => {
    const fun = function () {
       foo = false ;
    }
    let foo= true;
  const tree = renderer.create(<BrowserRouter><Login show={foo} onClick={fun}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
