import { Operator } from "../types/operator";
import operations from "../utils/operations";

export const TreeNode = (
  operator: Operator | "",
  value: number | null,
  left: any = null,
  right: any = null
) => {
  const result = (): number | null => {
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
