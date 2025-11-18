import styled from "styled-components";

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
