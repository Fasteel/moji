import Table from "cli-table3";
import data from "./data.js";
import copyPaste from "copy-paste";
import { askQuestion } from "./utils.js";

var table = new Table({
  head: ["id", ...Object.keys(data[0]).slice(0, -1)],
  colWidths: [5, 5, 70],
});

table.push(
  ...data.map((values, index) => [index, ...Object.values(values).slice(0, -1)])
);

console.log(table.toString());

const userResponse = await askQuestion("Enter emoji id : ");

const userSelectedRow = data[userResponse];
copyPaste.copy(userSelectedRow.code);
