import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttemps, setRequestedAttempts] = useState<number>(0);

    function requestAttempts(event: React.ChangeEvent<HTMLInputElement>): void {
        const requestNumber = parseInt(event.target.value);
        if (!isNaN(requestNumber)) {
            setRequestedAttempts(requestNumber);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttemps" as={Row}>
                <Form.Label column sm={2}>
                    Enter Your Requested Amount of Attempts
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={requestedAttemps}
                        onChange={requestAttempts}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + requestedAttemps)}
                >
                    gain
                </Button>
            </div>
            <div>Attemps left: {attempts}</div>
        </div>
    );
}
