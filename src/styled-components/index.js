import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin-top: 15%;
`;

export const StyledListContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  vertical-align: middle;

  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 20px 0px;
      display: flex;
      gap: 20px;
      font-size: 30px;
      font-weight: 400;
      align-items: center;
      justify-content: space-between;
      text-transform: capitalize;
    }

    input {
      position: relative;
      border: 2px solid #000;
      border-radius: 2px;
      background: none;
      cursor: pointer;
      line-height: 0;
      margin: 0 0.6em 0 0;
      outline: 0;
      padding: 0 !important;
      vertical-align: text-top;
      height: 15px;
      width: 15px;
      -webkit-appearance: none;
      opacity: 0.5;

      &::hover {
        opacity: 1;
      }

      &:checked {
        background-color: #000;
        opacity: 1;
      }

      &:before {
        content: '';
        position: absolute;
        right: 50%;
        top: 50%;
        width: 4px;
        height: 10px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        margin: -1px -1px 0 -1px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
    }
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  width: 50%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;

  &:focus {
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: 2px solid #ccc;
  padding: 6px 20px;
  border-radius: 10px;
  background: #e7e7e7;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledDeleteButton = styled.button`
  background: transparent;
  border: navajowhite;
  font-size: 22px;
  font-weight: 700;
  color: #000;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 36px;
`;
