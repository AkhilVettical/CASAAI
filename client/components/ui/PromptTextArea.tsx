"use client";

import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { set } from "date-fns";
import { useState } from "react";

export function PromptTextarea() {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    //function call to send data to server
  };

  return (
    <div className="w-[32rem]">
      <Textarea
        variant="static"
        placeholder="Enter a prompt"
        rows={8}
        onChange={(event) => {
          setPrompt(event.target.value);
        }}
      />
      <div className="flex w-full justify-between py-1.5">
        <IconButton variant="text" color="blue-gray" size="sm" placeholder="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </IconButton>
        <div className="flex gap-2">
          <Button
            size="sm"
            color="red"
            variant="text"
            className="rounded-md"
            placeholder={""}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            className="rounded-md bg-[#DA9732] text-white"
            placeholder={""}
            onClick={handleGenerate}
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
}
