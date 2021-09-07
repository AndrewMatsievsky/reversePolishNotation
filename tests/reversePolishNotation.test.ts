import { ReversePolishCalculator } from "../src/reversePolishNotation";

const rpc = new ReversePolishCalculator();

test("should evaluate single line expression", () => {
  expect(rpc.evaluate("5 5 5 8 + + -")).toBe(-13);
});

test("should evaluate sequence of calls(1)", () => {
  rpc.evaluate("5");
  rpc.evaluate("9");
  rpc.evaluate("1");
  rpc.evaluate("-");
  expect(rpc.evaluate("/")).toBe(0.625);
});

test("should evaluate sequence of calls(2)", () => {
  rpc.evaluate("-3");
  rpc.evaluate("-2");
  rpc.evaluate("*");
  rpc.evaluate("5");
  expect(rpc.evaluate("+")).toBe(11);
});
