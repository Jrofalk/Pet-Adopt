import React from "react";

// This file exports the Input, Select, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function SelectOne(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option></option>
                <option value="1">0-2</option>
                <option value="2">3-4</option>
                <option value="3">5+</option>
            </select>

        </div>
    );
}

export function SelectTwo(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option></option>
                <option value="1">0</option>
                <option value="2">1</option>
                <option value="3">2+</option>
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