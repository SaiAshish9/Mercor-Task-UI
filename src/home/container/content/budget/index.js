import React from "react";
import {
  BudgetAmount,
  BudgetCard,
  BudgetContainers,
  BudgetSubText,
  BudgetText,
} from "./styles";
import { useStore } from "store";

const BudgetContainer = ({ data }) => {
  const {
    state: { budget },
  } = useStore();

  return (
    <BudgetContainers>
      {data.map((item, index) => (
        <BudgetCard key={index}>
          <BudgetText>{item.heading}</BudgetText>
          <BudgetSubText>{item.subText}</BudgetSubText>
          <BudgetAmount>{index === 3 ? budget : item.amount}</BudgetAmount>
        </BudgetCard>
      ))}
    </BudgetContainers>
  );
};

export default BudgetContainer;
