import React from "react";

export const Bold = ({ children }) => <strong>{children}</strong>;

export const Text = ({ children }) => (
  <p style={{ fontSize: "20px" }}>{children}</p>
);

export const Heading1 = ({ children }) => (
  <h1 style={{ fontSize: "35px" }}>{children}</h1>
);
