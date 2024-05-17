import {
  constructCategoryColors,
  cx,
  deepEqual,
  defaultValueFormatter,
  getYAxisDomain,
} from "../../../lib/components/common/utils";

describe("utils", () => {
  describe("getYAxisDomain", () => {
    it("should return auto for both min and max when autoMinValue is true", () => {
      expect(getYAxisDomain(true, undefined, undefined)).toEqual([
        "auto",
        "auto",
      ]);
    });

    it("should return provided minValue and auto for max when autoMinValue is false", () => {
      expect(getYAxisDomain(false, 10, undefined)).toEqual([10, "auto"]);
    });

    it("should return auto for min and provided maxValue when autoMinValue is true", () => {
      expect(getYAxisDomain(true, undefined, 100)).toEqual(["auto", 100]);
    });

    it("should return provided minValue and maxValue when autoMinValue is false", () => {
      expect(getYAxisDomain(false, 10, 100)).toEqual([10, 100]);
    });
  });

  describe("constructCategoryColors", () => {
    it("should map each category to a color", () => {
      const categories = ["cat1", "cat2", "cat3"];
      const colors = ["red", "green", "blue"];
      const expectedMap = new Map([
        ["cat1", "red"],
        ["cat2", "green"],
        ["cat3", "blue"],
      ]);
      expect(constructCategoryColors(categories, colors)).toEqual(expectedMap);
    });
  });

  describe("deepEqual", () => {
    it("should return true for two identical objects", () => {
      const obj1 = { key: "value" };
      const obj2 = { key: "value" };
      expect(deepEqual(obj1, obj2)).toBe(true);
    });

    it("should return false for two different objects", () => {
      const obj1 = { key: "value" };
      const obj2 = { key: "different value" };
      expect(deepEqual(obj1, obj2)).toBe(false);
    });
  });

  describe("cx", () => {
    it("should concatenate class names into a single string", () => {
      expect(cx("class1", null, "class2", undefined, false, "class3")).toBe(
        "class1 class2 class3",
      );
    });

    it("should override tailwind classes", () => {
      expect(cx("text-red-500", "text-blue-500")).toBe("text-blue-500");
    });
  });

  describe("defaultValueFormatter", () => {
    it("should convert a number to a string", () => {
      expect(defaultValueFormatter(123)).toBe("123");
    });
  });
});
