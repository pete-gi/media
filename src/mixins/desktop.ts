import QueryType from "interfaces/QueryType";
import mouse from "./mouse";

const desktop: QueryType = {
  ...mouse,
  "min-width": {
    value: 1200,
    unit: "px",
  },
};

export default desktop;
