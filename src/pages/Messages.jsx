import React, { useState, useEffect } from "react";

function App() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showSecondPrompt, setShowSecondPrompt] = useState(false);

  const prompts = [
    {
      id: 1,
      prompt: "Study Requirement",
      choices: ["How to create new study?", "Update your study requirement"]
    },
    {
      id: 2,
      prompt: "Participant Recruitment",
      choices: ["Square", "Circle", "Triangle"],
    },
    {
      id: 3,
      prompt: "Pricing & refund policy",
      choices: ["Apple", "Banana", "Orange"]
    },
    {
      id: 4,
      prompt: "Verification Process",
      choices: ["Apple", "Banana", "Orange"]
    },
    {
      id: 5,
      prompt: "Data Privacy",
      choices: ["Apple", "Banana", "Orange"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondPrompt(true);
    }, 2000); // Delay in milliseconds, 2000ms = 2 seconds

    // Clear the timer when component unmounts or when the second prompt is shown
    return () => clearTimeout(timer);
  }, []);

  const handlePromptSelection = (prompt) => {
    setSelectedPrompt(prompt);
    setSelectedChoice(null); // Reset selected choice when prompt changes
  };

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <>
    <div className='font-Roboto text-5xl md:text-7xl  flex flex-col justify-center items-center'>
         <div className="md:w-1/2">
    <h1 className='text-slate-700'>Hello there.</h1>
    <h1 className='text-blue-600 '>How can we help you?</h1>
    </div>
         </div>
    <div className="container mx-auto p-4 flex justify-center items-center">
    
      <div className="w-1/2">
        <div className="flex flex-col mr-8">
          <div className="mb-4">
            <ul className="flex flex-col space-y-4">
              {prompts.map((prompt) => (
                <li key={prompt.id}>
                  <button
                    className={`py-2 text-white px-4 rounded-md ${
                      selectedPrompt && selectedPrompt.id === prompt.id ? "bg-blue-500 text-white" : "bg-blue-500"
                    }`}
                    onClick={() => handlePromptSelection(prompt)}
                  >
                    {prompt.prompt}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {selectedPrompt && (
            <div className="mb-4">
              <p className="flex justify-end">
                <div className="border-2 py-2 px-4 rounded-md bg-grey-950">
                  {selectedPrompt.prompt}
                </div>
              </p>
            </div>
          )}
          {showSecondPrompt && selectedPrompt && (
            <div>
              <ul className="flex flex-col space-y-4">
                {selectedPrompt.choices.map((choice, index) => (
                  <li key={index}>
                    <button
                      className={`py-2 px-4 rounded-md text-white  ${
                        selectedChoice === choice ? "bg-blue-500 text-white" : "bg-blue-500"
                      }`}
                      onClick={() => handleChoiceSelection(choice)}
                    >
                      {choice}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedChoice && (
            <div>
              <p className="flex justify-end">
                <div className="border-2 py-2 px-4 rounded-md bg-grey-950">
                  {selectedChoice}
                </div>
              </p>
            </div>
          )}

        </div>
      </div>
  
    </div>
    </>
  );
}

export default App;











