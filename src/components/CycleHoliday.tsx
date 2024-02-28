import React, { useState } from "react";
import { Button } from "react-bootstrap";

const HOLIDAYS_IN_ORDER: Record<string, string> = {
    "🎄": "💖",
    "💖": "🐇",
    "🐇": "🎃",
    "🎃": "🦃",
    "🦃": "🎄"
};

const HOLIDAYS_ALPHABETICALLY: Record<string, string> = {
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "🦃",
    "🦃": "💖",
    "💖": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => setHoliday(HOLIDAYS_ALPHABETICALLY[holiday])}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(HOLIDAYS_IN_ORDER[holiday])}>
                Advance by Year
            </Button>
        </div>
    );
}
