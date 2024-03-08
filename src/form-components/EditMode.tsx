import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function editing(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsEditing(event.target.checked);
    }

    function changeUsername(event: React.ChangeEvent<HTMLInputElement>): void {
        setUsername(event.target.value);
    }

    function changeStudentStatus(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Form.Check
                    type="switch"
                    id="is-editing"
                    label="Edit Mode"
                    checked={isEditing}
                    onChange={editing}
                ></Form.Check>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {isEditing && (
                    <Form.Group controlId="formUsernameEdit">
                        <Form.Label hidden={!isEditing}>
                            Enter Username:
                        </Form.Label>
                        <Form.Control
                            value={username}
                            onChange={changeUsername}
                            disabled={!isEditing}
                        ></Form.Control>
                    </Form.Group>
                )}
                {isEditing && (
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Set Student:"
                        checked={isStudent}
                        onChange={changeStudentStatus}
                        disabled={!isEditing}
                    ></Form.Check>
                )}
            </div>
            <div>
                {username} is{isStudent ? " a student" : " not a student"}
            </div>
        </div>
    );
}
