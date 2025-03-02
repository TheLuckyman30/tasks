import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDieNum, setLeftDie] = useState<number>(1);
    const [rightDieNum, setRightDie] = useState<number>(2);

    function rollLeftDie(): void {
        setLeftDie(d6());
    }

    function rollRightDie(): void {
        setRightDie(d6());
    }
    return (
        <div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            <br></br>
            <span data-testid={"left-die"}>Value of Left: {leftDieNum}</span>
            <span data-testid={"right-die"}>Value of Right: {rightDieNum}</span>
            {leftDieNum !== 1 &&
                rightDieNum !== 1 &&
                leftDieNum === rightDieNum && <div>Win</div>}
            {leftDieNum === 1 && rightDieNum === 1 && <div>Lose</div>}
        </div>
    );
}
