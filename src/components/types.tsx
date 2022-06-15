export interface DataIssue {
  readonly type: string;
  readonly severity: string;
  readonly component: string;
  readonly selector: string;
  readonly url: string;
}

export interface TreeNode {
  url: string;
  parent?: string;
  children?: TreeNode[];
  issues?: DataIssue[];
}

export interface DataIssueList {
  url: string;
  issueList: DataIssue[];
}

export type TreeProps = {
  onNodeClick: (issues: DataIssue[]) => void;
  node: TreeNode;
};
