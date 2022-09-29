import { Operator } from "../types/operator";

export const TreeNode = (
  operator: Operator | "",
  value: number | null,
  left: any = null,
  right: any = null
) => {
  const result = (): number | null => {
    const operations = {
      "+": (a: number, b: number): number => a + b,
      "-": (a: number, b: number): number => a - b,
      x: (a: number, b: number): number => a * b,
      "÷": (a: number, b: number): number => a / b,
    };
    if (operator && (left || right)) {
      return operations[operator](left.result(), right.result());
    }
    return value;
  };

  const toString = (): string | undefined => {
    if (operator && (left || right)) {
      return `(${left?.toString()} ${operator} ${right?.toString()})`;
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
