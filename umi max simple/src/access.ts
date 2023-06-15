import React from "react";

export default function (initialState) {

    const token = localStorage.getItem('token');
    // const token = localStorage.getItem('token');

    return {
        isUser: (token ? true : false)
    };
}