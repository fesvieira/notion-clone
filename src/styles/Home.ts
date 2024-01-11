import styled from "styled-components";
import { BubbleMenu } from "@tiptap/react";

export const NotionWindow = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  border-radius: 1rem;
  min-height: 700px;
  width: 1100px;
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
  border: 0;

  width: 0.75rem;
  height: 0.75rem;

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
`;

export const StyledBubbleMenu = styled(BubbleMenu)`
  display: flex;
  flex-direction: row;

  border: 1px #52525b;
  border-radius: 0.5rem;

  box-shadow: 1px 1px 6px black;

  background: #3f3f46;
  overflow: hidden;

  & > :last-child {
    border-right: 0;
  }
`;

export const BubbleButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  gap: 0.5rem;

  font-weight: 600;
  color: #d4d4d8;

  padding: 0.5rem;

  border-right: 1px solid white;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;

  background-color: ${({ isActive }) => (isActive ? "#1e3a8a" : "#3f3f46")};

  & > svg {
    color: #d4d4d8;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
