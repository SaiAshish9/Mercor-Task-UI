import React from "react";
import {
  BudgetAmount,
  BudgetCard,
  BudgetContainers,
  BudgetSubText,
  BudgetText,
} from "./styles";

const BudgetContainer = ({ data }) => {
  return (
    <BudgetContainers>
      {data.map((item, index) => (
        <BudgetCard key={index}>
          <BudgetText>{item.heading}</BudgetText>
          <BudgetSubText>{item.subText}</BudgetSubText>
          <BudgetAmount>{item.amount}</BudgetAmount>
        </BudgetCard>
      ))}
    </BudgetContainers>
  );
};

export default BudgetContainer;
