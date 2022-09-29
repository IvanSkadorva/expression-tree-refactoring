import assert from "assert";
import { tree } from "../src/tree";

describe("Expression Tree ", () => {
  it("should correctly convert the tree to a string", () => {
    // Assert is used here instead of "expect" because the task requires
    // that these lines shouldn't be changed.
    assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
  });

  it("should calculate the result of the tree", () => {
    assert.strictEqual(2, tree.result());
  });
});
