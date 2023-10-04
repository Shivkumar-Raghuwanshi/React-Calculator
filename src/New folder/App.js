
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import CalcProvider from './components/CalcContext';

const btnValues =[
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3,"+"],
  [0, ".", "="]
];


function App() {
  return (
    <CalcProvider className="App">
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i)=>(
            <Button 
            value={btn}
            kry={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
      

    </CalcProvider>
  );
}

export default App;
