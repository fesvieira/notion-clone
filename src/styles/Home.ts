import styled from "styled-components";

export const NotionWindow = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;

  border-radius: 1rem;

  min-height: 700px;
  width: 1100px;

  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 0.25rem 0.25rem 6px rgb(40, 40, 40);

  overflow: hidden;

  background: #27272a;

  & > main {
    padding: 1rem;
  }
`;

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  border-right: rgb(244, 244, 255);

  background: #18181b;

  padding: 1rem;
`;

export const SideButtonsRow = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;
  padding: 0;
`;

export const SideButton = styled.button<{ background: string }>`
  border-radius: 100%;

  width: 0.75rem;
  height: 0.75rem;

  border: 0;

  background: #d4d4d8;

  transition: 0.5s;

  ${SideButtonsRow}:hover & {
    background: ${({ background }) => background};
  }
`;

export const TextContainer = styled.div`
  max-width: 700px;

  margin: 0 auto;

  padding: 2rem;
` 
