import React from "react";

// This file exports the Input, Select, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function Select(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn">
            {props.children}
        </button>
    );
}