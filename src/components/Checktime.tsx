import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function Checkrating() {


    return (
        <div className="pt-7 flex flex-wrap gap-4 items-center color-">
        <CheckboxGroup
            label="Time"
        >
            <Checkbox value="alltime">เปิดตลอดเวลา</Checkbox>
            <Checkbox value="sometime">มีเวลาเปิด - ปิด</Checkbox>
            
        </CheckboxGroup>
        </div>
    );
}