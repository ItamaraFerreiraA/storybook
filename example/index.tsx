import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao, AbCard, AbTag } from '../.';

const App = () => {
  return (
    <div>
      <AbBotao /> 
      <AbCard>ihuuuul</AbCard>   
      <AbTag />
    </div>  
  );
}; 

ReactDOM.render(<App />, document.getElementById('root'));
