import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);

    function showAnswer(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button onClick={showAnswer}>Reveal Answer</Button>
            {revealed && <div>42</div>}
        </div>
    );
}
