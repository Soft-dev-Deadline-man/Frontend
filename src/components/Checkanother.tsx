import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function Checkrating() {


    return (
        <div className="pt-7">
        <CheckboxGroup
            label="Another"
           
        >
            <Checkbox value="animal">สัตว์เลี้ยงทุกชนิด</Checkbox>
            <Checkbox value="alcohol">ดื่มแอลกอฮอล์</Checkbox>
            <Checkbox value="Smoke">สูบบุหรี่</Checkbox>
            
        </CheckboxGroup>
        </div>
    );
}