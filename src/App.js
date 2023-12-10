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

function App() {
  const [inputString, setInputString] = useState('');
  const [store, setStore] = useState([]);

  const handleInputValue = (e) => setInputString(e.target.value);

  const handleAdd = () => {
    if (inputString) {
      const newItem = {
        id: uuidv4(),
        value: inputString,
        isChecked: false,
      };
      setStore((prevStore) => [...prevStore, newItem]);
      setInputString('');
    }
  };

  const handleRemove = (id) =>
    setStore((prevStore) => prevStore.filter((item) => item.id !== id));

  const handleCheckboxClick = (id) =>
    setStore((prevStore) =>
      prevStore.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );

  return (
    <div className='App'>
      <StyledContainer>
        <StyledH1>Task List</StyledH1>
        <StyledForm>
          <StyledInputText value={inputString} onChange={handleInputValue} />
          <StyledButton disabled={!inputString} onClick={handleAdd}>
            Add
          </StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledListContainer>
        <StyledUl>
          {store && store.length
            ? store.map(({ id, value, isChecked }) => (
                <>
                  <StyledLi key={id}>
                    <StyledChecboxInput
                      type='checkbox'
                      checked={isChecked}
                      onChange={() => handleCheckboxClick(id)}
                    />
                    <span>{value}</span>
                    <StyledDeleteButton
                      disabled={!isChecked}
                      onClick={() => handleRemove(id)}
                    >
                      X
                    </StyledDeleteButton>
                  </StyledLi>
                </>
              ))
            : null}
        </StyledUl>
      </StyledListContainer>
    </div>
  );
}

export default App;
