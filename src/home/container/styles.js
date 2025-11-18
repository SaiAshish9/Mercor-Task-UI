import styled from "styled-components";

export const Container = styled.div`
  height: 200vh;
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

export const BudgetCard = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  width: 320px;
  border: 1px solid #e5e7eb;
  margin-top: 1rem;
`;

export const BudgetText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
`;

export const BudgetSubText = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  color: rgb(75 85 99);
`;

export const BudgetAmount = styled.p`
  color: #5146e2;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const BudgetContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
