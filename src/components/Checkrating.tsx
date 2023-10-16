import React from "react";
import { Button } from "@nextui-org/react";



export default function Checkrating() {
    return (
        <div className="pt-7 flex flex-wrap gap-4 items-center color-">

            <Button color="primary" variant="ghost">
                1+
            </Button>
            <Button color="primary" variant="ghost">
                2+
            </Button>
            <Button color="primary" variant="ghost">
                3+
            </Button>
            <Button color="primary" variant="ghost">
                4+
            </Button>

        </div>
    );
}

