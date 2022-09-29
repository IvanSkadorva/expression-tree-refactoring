import { TreeNode } from "./treeNode";

export const tree = TreeNode(
  "÷",
  null,
  TreeNode(
    "+",
    null,
    TreeNode("", 7),
    TreeNode(
      "x",
      null,
      TreeNode("-", null, TreeNode("", 3), TreeNode("", 2)),
      TreeNode("", 5)
    )
  ),
  TreeNode("", 6)
);
