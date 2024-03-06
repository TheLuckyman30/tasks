import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "green",
    "blue",
    "cyan",
    "orange",
    "yellow",
    "magenta",
    "purple"
];

const DEFAULT_COLOR: string = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(event) =>
                            setSelectedColor(event.target.value)
                        }
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        style={{ backgroundColor: color }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
