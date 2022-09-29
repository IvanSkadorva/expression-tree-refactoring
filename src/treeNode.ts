import { Operator } from "../models/types/operator";

export const TreeNode = (
  operator: Operator | "",
  value: number | null,
  left: any = null,
  right: any = null
) => {
  const result = () => {
    const options = {
      "+": () => left.result() + right.result(),
      "-": () => left.result() - right.result(),
      x: () => left.result() * right.result(),
      "÷": () => left.result() / right.result(),
      "": () => value,
    };
    return options[operator]();
  };

  const toString = () => {
    if (operator && (left || right)) {
      return `(${left.toString()} ${operator} ${right.toString()})`;
    }
    return value?.toString();
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
