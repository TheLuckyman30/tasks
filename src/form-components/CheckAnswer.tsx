import React, { ChangeEvent, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function setAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
                <Form.Group controlId="formCheckAnswer" as={Row}>
                    <Form.Label column sm={2}>
                        Enter Answer:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={givenAnswer}
                            onChange={setAnswer}
                        ></Form.Control>
                    </Col>
                </Form.Group>
            </div>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
