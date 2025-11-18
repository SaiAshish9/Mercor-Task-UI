import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 1.5rem 2.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  color: rgb(107 114 128);
`;
