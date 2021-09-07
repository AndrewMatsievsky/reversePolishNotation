import readline from "readline";
import { ReversePolishCalculator } from "./src/reversePolishNotation";

const rpc = new ReversePolishCalculator();

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLineInterface.on("line", function (line) {
  if (line === "q") readLineInterface.close();

  console.log(">", rpc.evaluate(line));
});
