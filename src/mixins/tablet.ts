import QueryType from "interfaces/QueryType";
import touch from "./touch";

const tablet: QueryType = {
  ...touch,
  "min-width": {
    value: 768,
    unit: "px",
  },
  "max-width": {
    value: 1360,
    unit: "px",
  },
};

export default tablet;
