import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="formQuestionChoices">
                    <Form.Label>Please Select an Answer:</Form.Label>
                    <Form.Select
                        value={choice}
                        onChange={(event) => setChoice(event.target.value)}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>Correctness: {choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
