import QueryType from "interfaces/QueryType";
import touch from "./touch";

const mobile: QueryType = {
  ...touch,
  "max-width": {
    value: 767,
    unit: "px",
  },
};

export default mobile;
