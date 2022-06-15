import { buildTree } from "./common/common";
import { appendix } from "./data";
import { useState } from "react";
import { DataIssue } from "./components/types";
import Tree from "./components/Tree";

function App() {
  const [issuesList, setIssuesList] = useState<DataIssue[]>([]);

  const NodeClickHandler = (issues: DataIssue[]) => {
    setIssuesList(issues);
  };

  return (
    <div style={{ marginLeft: 15 }}>
      <Tree node={buildTree(appendix)} onNodeClick={NodeClickHandler} />
      {issuesList && (
        <ul>
          {issuesList?.map((issue, index) => {
            return (
              <li
                key={index}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid red",
                  padding: 30
                }}
              >
                <span>{`url: ${issue.url}`}</span>
                <span>{`component: ${issue.component} `}</span>
                <span>{`selector: ${issue.selector} `}</span>
                <span>{`type:${issue.type}`}</span>
              </li>
            );
          })}
        </ul>
      )}
      <span>Ⓒ Itay Sorin Ⓒ</span>
    </div>
  );
}

export default App;
