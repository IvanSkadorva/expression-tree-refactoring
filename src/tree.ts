import { TreeNode } from "./treeNode";

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
