import React from "react";
import {
  BudgetAmount,
  BudgetCard,
  BudgetContainers,
  BudgetSubText,
  BudgetText,
  Container,
  Heading,
  Text,
} from "./styles";
import { BudgetContainer, FiltersContainer, TableContainer } from "./content";

const MainContainer = () => {
  const data = [
    {
      heading: "Allocated Budget",
      subText: "over 3 years",
      amount: "$5M",
    },
    {
      heading: "Personal Allocation",
      subText: "over 3 years",
      amount: "$1M",
    },
    {
      heading: "Budget Balance for 4 Members",
      subText: "over 3 years",
      amount: "$4M",
    },
    {
      heading: "Unspent Budget",
      subText: "over 3 years",
      amount: "$4M",
    },
  ];

  return (
    <Container>
      <Heading>Application Shortlisting</Heading>
      <Text>
        We've raised a $100M seed round for our amazing new startup, and it’s
        time to lock in.
      </Text>
      <BudgetContainer data={data} />
      <FiltersContainer />
      <TableContainer />
    </Container>
  );
};

export default MainContainer;
