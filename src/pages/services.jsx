import { useState } from "react";
import HeaderText from "../components/text/header";
import ParagraphText from "../components/text/paragraph";
import ContainedButton from "../components/buttons/contained";
import { useAppContext } from "../state/app-context";

function services() {
  const { states } = useAppContext();
  return (
    <div className="container mx-auto p-6 space-y-4">
      <HeaderText header="Service Page" />
      <ParagraphText header="Paragraph Page" />
      <ContainedButton header="content button" />

      {states.map((item) => (
        <p
          className="w-20 h-20 bg-pink-100 rotate-45 flex items-center justify-center"
          key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default services;
