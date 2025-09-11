import React, { useEffect, useState } from "react";

import HeaderText from "./components/text/header";
import ParagraphText from "./components/text/paragraph";
import ContainedButton from "./components/buttons/contained";
import Button from "@mui/material/Button";
import { useAppContext } from "./state/app-context";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);

  const { saveStates, states } = useAppContext();

  const getData = async () => {
    setLoading(true);
    const url = "https://test1.greenindie.com/api/home/nigeria-states";

    axios
      .get(url)
      .then((res) => {
        const result = res.data;
        saveStates(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });

    // try {
    //   const response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }

    //   const result = await response.json();
    //   //console.log(result);
    //   saveStates(result.data);
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error.message);
    //   setLoading(loading);
    // }
  };

  return (
    <div className="container mx-auto p-6 space-y-4">
      <HeaderText header="Home Page" />
      <ParagraphText header="Paragraph Page" />

      <Button onClick={getData} color="success" variant="contained">
        {loading ? "Fetching..." : "Fetch Data"}
      </Button>

      <div className="flex flex-col gap-y-2 pt-8">
        {states.map((item) => (
          <p
            className="text-green-700  p-4 bg-green-100 rounded-lg w-[200px]"
            key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
