import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        if (question === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>
                Change Type of Question
            </Button>
            {question === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {question === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
