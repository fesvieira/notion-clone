import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: top;
  justify-content: flex-start;

  height: 100%;
  width: 100dvw;

  & > * {
    padding: 0;
    margin: 0;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 1rem;

  height: 100%;
  width: 100%;
`;
