import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setInProgress(!inProgress);
    }

    function stopQuiz(): void {
        setInProgress(!inProgress);
    }
    function Mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={Mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Attemps Left: {attempts}</div>
        </div>
    );
}
