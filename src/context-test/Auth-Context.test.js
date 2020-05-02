import React from 'react';
import { render, fireEvent, cleanup, within} from '@testing-library/react';
import '@testing-library/jest-dom'
import {AuthContext, WrapperCom} from './Auth-Context';
import Auth from './Auth';

afterEach(cleanup); 

test('test loggedIn is false initially', () => {
  
   const {queryByTestId} = render(
        <AuthContext.Provider>
        <WrapperCom>
          <Auth />
          </WrapperCom>
        </AuthContext.Provider>
      );

     expect(queryByTestId('isLoggedIn')).toHaveTextContent('false');
     expect(queryByTestId('hello')).toHaveTextContent('Hello');
});



test('test loggedIn to be true after login btn click', () => {
    const {queryByTestId} = render(
        <AuthContext.Provider>
        <WrapperCom>
          <Auth />
          </WrapperCom>
        </AuthContext.Provider>
      );
 
       fireEvent.click(queryByTestId('login'))

      expect(queryByTestId('isLoggedIn')).toHaveTextContent('true');
 
 });

 test('test loggedIn to be false after logout btn click', () => {
    const {queryByTestId} = render(
        <AuthContext.Provider>
        <WrapperCom>
          <Auth />
          </WrapperCom>
        </AuthContext.Provider>
      );
 
       fireEvent.click(queryByTestId('logout'))

      expect(queryByTestId('isLoggedIn')).toHaveTextContent('false');
 
 });