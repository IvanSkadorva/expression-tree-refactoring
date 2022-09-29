import { Operator } from "../models/types/operator";

const assert = require("assert");

const TreeNode = (
  operator: Operator | "",
  value: number | null,
  left: any,
  right: any
) => {
  const result = function () {
    switch (operator) {
      case "+":
        return left.result() + right.result();
      case "-":
        return left.result() - right.result();
      case "x":
        return left.result() * right.result();
      case "÷":
        return left.result() / right.result();
      default:
        return value;
    }
  };

  const toString = function () {
    switch (operator) {
      case "+":
        return `(${left.toString()} + ${right.toString()})`;
      case "-":
        return `(${left.toString()} - ${right.toString()})`;
      case "x":
        return `(${left.toString()} x ${right.toString()})`;
      case "÷":
        return `(${left.toString()} ÷ ${right.toString()})`;
      default:
        return value?.toString();
    }
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString,
  };
};

export const tree = TreeNode(
  "÷",
  null,
  TreeNode(
    "+",
    null,
    TreeNode("", 7, null, null),
    TreeNode(
      "x",
      null,
      TreeNode(
        "-",
        null,
        TreeNode("", 3, null, null),
        TreeNode("", 2, null, null)
      ),
      TreeNode("", 5, null, null)
    )
  ),
  TreeNode("", 6, null, null)
);
