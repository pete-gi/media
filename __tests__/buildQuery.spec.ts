import QueryType from "../src/interfaces/QueryType";
import buildQuery from "../src/buildQuery";

describe("Test query builder against single value", () => {
  test("Element matches query with boolean true and string value", () => {
    const query: QueryType = {
      screen: true,
      "max-width": "1000px",
    };
    expect(buildQuery(query)).toEqual("screen and (max-width: 1000px)");
  });
  test("Element matches query with boolean false and object value", () => {
    const query: QueryType = {
      screen: false,
      "max-width": {
        value: 1000,
        unit: "px",
      },
    };
    expect(buildQuery(query)).toEqual("(max-width: 1000px)");
  });
  test("Element matches query with array value", () => {
    const query: QueryType = {
      "max-width": [1000, "px"],
    };
    expect(buildQuery(query)).toEqual("(max-width: 1000px)");
  });
  test("Element matches query with boolean and array value", () => {
    const query: QueryType = {
      screen: true,
      "max-width": [1000, "px"],
    };
    expect(buildQuery(query)).toEqual("screen and (max-width: 1000px)");
  });
  test("Element matches query with boolean and range object min value", () => {
    const query: QueryType = {
      all: true,
      width: {
        min: {
          value: 1000,
          unit: "px",
        },
      },
    };
    expect(buildQuery(query)).toEqual("all and (min-width: 1000px)");
  });
  test("Element matches query with boolean and range object max value", () => {
    const query: QueryType = {
      all: true,
      width: {
        max: {
          value: 1000,
          unit: "px",
        },
      },
    };
    expect(buildQuery(query)).toEqual("all and (max-width: 1000px)");
  });
  test("Element matches query with boolean and range array min value", () => {
    const query: QueryType = {
      screen: true,
      width: {
        min: [1000, "px"],
      },
    };
    expect(buildQuery(query)).toEqual("screen and (min-width: 1000px)");
  });
  test("Element matches query with boolean and range full object value", () => {
    const query: QueryType = {
      screen: true,
      width: {
        min: [1000, "px"],
        max: [1200, "px"],
      },
    };
    expect(buildQuery(query)).toEqual(
      "screen and (min-width: 1000px) and (max-width: 1200px)",
    );
  });
  test("Element matches query with multiple values'", () => {
    const query: QueryType = {
      screen: true,
      width: {
        min: [1000, "px"],
        max: [1200, "px"],
      },
      "min-height": [700, "px"],
      orientation: "portrait",
    };
    expect(buildQuery(query)).toEqual(
      "screen and (min-width: 1000px) and (max-width: 1200px) and (min-height: 700px) and (orientation: portrait)",
    );
  });
  test("Element matches query with even more values' and the `not`", () => {
    const query: QueryType = {
      screen: true,
      width: {
        min: [1000, "px"],
        max: [1200, "px"],
      },
      "min-height": [700, "px"],
      not: true,
      orientation: "portrait",
      "any-hover": "hover",
      "prefers-color-scheme": "light",
      "max-resolution": {
        value: 150,
        unit: "dpi",
      },
    };
    expect(buildQuery(query)).toEqual(
      "screen and (min-width: 1000px) and (max-width: 1200px) and (min-height: 700px) and not (orientation: portrait) and (any-hover: hover) and (prefers-color-scheme: light) and (max-resolution: 150dpi)",
    );
  });
});
