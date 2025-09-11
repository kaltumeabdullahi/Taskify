import { useState } from "react";
import HeaderText from "../components/text/header";
import ParagraphText from "../components/text/paragraph";
import ContainedButton from "../components/buttons/contained";
import { useAppContext } from "../state/app-context";
import { Button } from "@mui/material";

function About() {
  const {
    count,
    increaseCount,
    decreaseCount,
    increaseCountByFive,
    decreaseCountByFive,
    toggleBackground,
    states,
  } = useAppContext();
  return (
    <div className="container mx-auto p-6 space-y-4">
      <HeaderText header="About Page" />
      <ParagraphText header="Paragraph Page" />
      <ContainedButton header="content button" />
      <h1>{count}</h1>

      {states.map((item) => (
        <p
          className="text-blue-700  p-4 bg-blue-100 rounded-bl-2xl w-[200px]"
          key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default About;
