import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledButton,
  StyledChecboxInput,
  StyledContainer,
  StyledDeleteButton,
  StyledForm,
  StyledH1,
  StyledInputText,
  StyledListContainer,
  StyledUl,
  StyledLi,
} from './styled-components';
import './App.css';

const uid = uuidv4();

function App() {
  const [inputString, setInputString] = useState('');
  const [store, setStore] = useState({});

  const handleInputValue = (e) => setInputString(e.target.value);

  const handleAdd = () => {
    if (inputString) {
      setStore({
        ...store,
        [uuidv4()]: { value: inputString, isChecked: false },
      });
      setInputString('');
    }
  };

  const handleRemove = (id) => {
    delete store[id];
    setStore({ ...store });
  };

  const handleCheckboxClick = (id) => {
    const currentObj = store[id];
    currentObj.isChecked = currentObj ? !currentObj?.isChecked : false;
    setStore({ ...store, [id]: currentObj });
  };

  return (
    <div className='App'>
      <StyledContainer>
        <StyledH1>Task List</StyledH1>
        <StyledForm>
          <StyledInputText
            key={uid}
            name='inputstring'
            value={inputString}
            onChange={handleInputValue}
          />
          <StyledButton disabled={!inputString} onClick={handleAdd}>
            Add
          </StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledListContainer>
        <StyledUl>
          {Object.keys(store).length
            ? Object.keys(store).map((oneKey) => {
                const { value, isChecked } = store[oneKey];
                return (
                  <StyledLi key={`li-${oneKey}`}>
                    <StyledChecboxInput
                      key={oneKey}
                      name={`checkbox-${oneKey}`}
                      type='checkbox'
                      checked={isChecked}
                      onChange={() => handleCheckboxClick(oneKey)}
                    />
                    <span>{value}</span>
                    <StyledDeleteButton
                      disabled={!isChecked}
                      onClick={() => handleRemove(oneKey)}
                    >
                      X
                    </StyledDeleteButton>
                  </StyledLi>
                );
              })
            : null}
        </StyledUl>
      </StyledListContainer>
    </div>
  );
}

export default App;
