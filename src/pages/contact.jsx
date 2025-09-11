import { useState } from "react";
import HeaderText from "../components/text/header";
import ParagraphText from "../components/text/paragraph";
import ContainedButton from "../components/buttons/contained";
import { useActionData } from "react-router-dom";
import { useAppContext } from "../state/app-context";

function Contact() {
  const { states } = useAppContext();
  return (
    <div className="container mx-auto p-6 space-y-4">
      <HeaderText header="Contact Page" />
      <ParagraphText header="Paragraph Page" />
      <ContainedButton header="content button" />

      {states.map((item) => (
        <p
          className="text-purple-700  p-4 bg-purple-100 rounded-b-2xl w-[200px]"
          key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Contact;
