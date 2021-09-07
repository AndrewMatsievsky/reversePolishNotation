export class ReversePolishCalculator {
  private numberStack: number[] = [];

  private operatorsStack: string[] = [];

  private allowedOperators = ["+", "-", "*", "/"];

  public evaluate(line: string) {
    try {
      this.validateInput(line);

      line.split(" ").map((el: string) => this.determineElement(el));
      return this.numberStack[this.numberStack.length - 1];
    } catch (error) {
      return error.message ? error.message : "";
    }
  }

  private determineElement(element: string) {
    if (this.allowedOperators.includes(element)) {
      this.operatorsStack.push(element);

      const result: number = this.calculate(
        this.operatorsStack.pop(),
        this.numberStack.pop(),
        this.numberStack.pop()
      );

      this.numberStack.push(Number(result));
    } else if (Number(element)) {
      this.numberStack.push(Number(element));
    }
  }

  private calculate(
    operator: string,
    firstValue: number,
    secondValue: number
  ): number {
    switch (operator) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return secondValue - firstValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return secondValue / firstValue;
    }
  }

  private validateInput(input: string) {
    if (input.length === 0) throw new Error();

    if (input.match(/[a-zA-Z]/))
      throw new Error(
        `> Only digits and ${this.allowedOperators.join("; ")} allowed`
      );
  }
}
