import QueryType from "interfaces/QueryType";
import mouse from "./mouse";

const widescreen: QueryType = {
  ...mouse,
  "min-width": {
    value: 1650,
    unit: "px",
  },
};

export default widescreen;
