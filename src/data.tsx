import { DataIssue } from "./components/types";

const ISSUE_DUMMY_ONE: DataIssue = {
  type: "Accessible Name",
  severity: "Critical",
  component: "6543wcfr",
  selector: "#tbl_mt > TBODY:nth-child(2) > TR:nth-child(1) > TD:nth-child(6)",
  url: "https://www.ynet.co.il/dating/singles"
};

const ISSUE_DUMMY_TWO: DataIssue = {
  type: "Interactive Role",
  severity: "Critical",
  component: "xydww2ed",
  selector:
    "#BJrajb3MOdP > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(2)",
  url: "https://www.ynet.co.il/dating/singles"
};

export const appendix = {
  "https://www.ynet.co.il/articles/0,7340,L-5778984,00.html": [],
  "https://www.ynet.co.il/dating/singles": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/dating/couples": [ISSUE_DUMMY_ONE],
  "https://www.ynet.co.il/economy/category/5363": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/economy/category/8091": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/economy/marketingadvertising": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/food/recipies": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/home/0,7340,L-1039,00.html": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/home/0,7340,L-1042,00.html": [
    ISSUE_DUMMY_ONE,
    ISSUE_DUMMY_TWO
  ],
  "https://www.ynet.co.il/home/0,7340,L-10610,00.html": [
    ISSUE_DUMMY_ONE,
    ISSUE_DUMMY_TWO
  ],
  "https://www.ynet.co.il/home/0,7340,L-10677,00.html": [ISSUE_DUMMY_TWO],
  "https://www.ynet.co.il/home/0,7340,L-2758,00.html": []
};
