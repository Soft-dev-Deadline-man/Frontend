import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function Checkcetagory() {


    return (
        <div className="pt-7">
            <CheckboxGroup
                label="Cetagories"

            >
                <Checkbox value="beach">ชายหาด และทะเล</Checkbox>
                <Checkbox value="shop">ช็อปปิ้ง</Checkbox>
                <Checkbox value="history">ประวัติศาสตร์ และวัฒนธรรม</Checkbox>
                <Checkbox value="enterain">สวนสัตว์ สวนน้ำ และสวนสนุก</Checkbox>
                <Checkbox value="meuseum">พิพิธภัณฑ์สัตว์น้ำและ การเรียนรู้ธรรมชาติ</Checkbox>
            </CheckboxGroup>
        </div>
    );
}

