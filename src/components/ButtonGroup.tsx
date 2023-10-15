import React, { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

interface ButtonGroupProps {
    buttons: string[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
    const [selectedButton, setSelectedButton] = useState("");

    const handleButtonClick = (buttonLabel: string) => {
        setSelectedButton(buttonLabel);;
    };

    return (
        <div className="pt-7">
            <CheckboxGroup
                label="Rating"
            >
                <div className="flex flex-wrap gap-4 items-center color-">
                    <div style={{ display: "flex", gap: "10px" }}>
                        {buttons.map((buttonLabel, index) => (
                            <button
                                className="rounded-md border-[1.5px]"

                                key={index}
                                style={{
                                    backgroundColor: selectedButton === buttonLabel ? "#FF6F6B" : "#fff",
                                    color: selectedButton === buttonLabel ? "#FFF" : "#276968",
                                    padding: "10px 20px",
                                    borderColor: selectedButton === buttonLabel ? "#FF6F6B" : "#276968",
                                    cursor: "pointer",
                                    outline: "none",
                                }}
                                onClick={() => handleButtonClick(buttonLabel)}
                            >
                                {buttonLabel}
                            </button>
                        ))}
                    </div>
                </div>
            </CheckboxGroup>
        </div>
    );
};

export default ButtonGroup;
