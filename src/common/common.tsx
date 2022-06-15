import { DataIssue, TreeNode } from "../components/types";

//gets base URL from given url
export const getBaseURL = (url: string) => {
  return url.match(/^https?:\/\/[^#?\/]+/)![0];
};

// gets Subs Domains from given URL
export const getSubsURL = (url: string) => {
  const urls: string[] = [];
  let base = getBaseURL(url);
  const paths = url.substring(url.indexOf(base) + base.length + 1).split("/");

  urls.push(base);

  paths?.forEach((path) => {
    let currURL = `${base}/${path}`;

    urls.push(currURL);

    base = currURL;
  });

  return urls;
};

export const buildTree = (appendix: Object): TreeNode => {
  const treeNodesMap = new Map<string, TreeNode>();
  let root = { url: "" };

  // iterates json entries
  Object.entries(appendix).forEach(([url, issues]) => {
    const paths = getSubsURL(url);

    paths.forEach((path) => {
      //if the path is same as base URL that means its the root and have no parent
      const parent =
        path !== getBaseURL(path)
          ? path.substring(0, path.lastIndexOf("/"))
          : undefined;

      //if not exists in map , create entry
      if (!treeNodesMap.has(path)) {
        let updatedIssues = issues.map((issue: DataIssue) => {
          return { ...issue, url: url };
        });

        treeNodesMap.set(path, {
          url: path,
          parent: parent,
          children: [],
          issues: path === url ? updatedIssues : undefined
        });
      }
    });
  });

  treeNodesMap.forEach((treeNode) => {
    // iterates all nodes and push each node to its parent childen array
    if (treeNode.parent) {
      const parentNode = treeNodesMap.get(treeNode.parent);

      parentNode?.children?.push(treeNode);
    } else {
      //if there is no parent -> we found root.
      root = treeNode;
    }
  });

  return root;
};

//DFS traversal to get all nested issues
export const getAllIssues = (node: TreeNode): DataIssue[] => {
  let issues: DataIssue[] = [...(node.issues || [])];

  if (node.children !== undefined && node.children?.length > 0) {
    node.children.forEach((child) => {
      issues = issues.concat(getAllIssues(child));
    });
  }

  return issues;
};
