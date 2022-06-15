import { useState, useCallback } from "react";
import { getAllIssues } from "../common/common";
import { TreeNode, TreeProps } from "./types";

const Tree = (props: TreeProps): JSX.Element => {
  const [expand, setexpand] = useState<boolean>(false);
  const handleExpend = useCallback(() => {
    setexpand(!expand);
  }, [expand, setexpand]);
  const handleClick = useCallback(() => {
    props.onNodeClick(getAllIssues(props.node));
  }, [props]);
  const symbol = expand ? "-" : "+";

  return (
    <div>
      <span onClick={handleExpend} style={{ cursor: "pointer" }}>
        {props.node.children?.length ? symbol : "x"}
      </span>
      <span onClick={handleClick}> {props.node.url}</span>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          borderLeft: "2px solid",
          paddingLeft: 20,
          left: 30
        }}
      >
        {expand &&
          (props.node.children ?? []).map((node: TreeNode) => (
            <Tree
              key={`${node.url}`}
              node={node}
              onNodeClick={props.onNodeClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Tree;
