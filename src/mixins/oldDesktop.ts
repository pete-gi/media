import QueryType from "interfaces/QueryType";
import mouse from "./mouse";

const oldDesktop: QueryType = {
  ...mouse,
  "min-width": {
    value: 640,
    unit: "px",
  },
  "max-width": {
    value: 1280,
    unit: "px",
  },
};

export default oldDesktop;
