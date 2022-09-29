import { Operator } from "../models/types/operator";

export const TreeNode = (
  operator: Operator | "",
  value: number | null,
  left: any,
  right: any
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

  const toString = function () {
    const options = {
      "+": () => `(${left.toString()} + ${right.toString()})`,
      "-": () => `(${left.toString()} - ${right.toString()})`,
      x: () => `(${left.toString()} x ${right.toString()})`,
      "÷": () => `(${left.toString()} ÷ ${right.toString()})`,
      "": () => value?.toString(),
    };
    return options[operator]();
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
