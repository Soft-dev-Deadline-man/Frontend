
import React from "react";
import ButtonGroup from "@/components/ButtonGroup";

const App: React.FC = () => {
  const handleButtonClick = (buttonLabel: string) => {
    console.log(`Button clicked: ${buttonLabel}`);
  };

  return (
    <div className="App">
      <ButtonGroup
        buttons={["Option 1", "Option 2", "Option 3"]}
        
      />
    </div>
  );
};

export default App;
