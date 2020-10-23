import QueryType from "interfaces/QueryType";

const buildQuery = (
  query: QueryType,
  getReadyQuery: boolean = true,
): string | string[] => {
  const queryArray = [];
  let queryPart: string | string[] = "";

  for (const item in query) {
    // @ts-expect-error
    if (typeof query[item] === "boolean") {
      queryPart = getFromBoolean(item, query);
      // @ts-expect-error
    } else if (typeof query[item] === "string") {
      queryPart = getFromString(item, query);
      // @ts-expect-error
    } else if (typeof query[item] === "object") {
      // @ts-expect-error
      if (Array.isArray(query[item])) {
        queryPart = getFromArray(item, query);
      } else {
        queryPart = getFromObject(item, query);
      }
    }
    if (queryPart !== "") {
      queryArray.push(queryPart);
    }
  }
  if (getReadyQuery) {
    const builtQuery = queryArray
      .flat()
      .join(" and ")
      .replace(/(and not and)/, "and not");
    return builtQuery as string;
  }
  return queryArray.flat();
};

const getFromBoolean = (item: string, query: QueryType): string => {
  // @ts-expect-error
  if (query[item]) {
    return item;
  }
  return "";
};
const getFromString = (item: string, query: QueryType): string => {
  // @ts-expect-error
  return `(${item}: ${query[item]})`;
};

const getFromArray = (item: string, query: QueryType): string | string[] => {
  // @ts-expect-error
  return `(${item}: ${query[item][0]}${query[item][1]})`;
};

const getFromObject = (item: string, query: QueryType): string | string[] => {
  // @ts-expect-error
  if (["min"] in query[item] || "max" in query[item]) {
    return getFromRange(item, query);
  }
  // @ts-expect-error
  return `(${item}: ${query[item].value}${query[item].unit})`;
};

const getFromRange = (item: string, query: QueryType): string[] => {
  let queryArray: string[] = [];
  // @ts-expect-error
  for (const minmax in query[item]) {
    const minmaxQuery = {
      // @ts-expect-error
      [`${minmax}-${item}`]: query[item][minmax],
    };
    const tmpQuery = buildQuery(minmaxQuery, false).toString();
    queryArray.push(tmpQuery);
  }

  return queryArray;
};

export default buildQuery;
