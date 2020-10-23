import QueryType from "./interfaces/QueryType";
import buildQuery from "./buildQuery";
// Mixins
import mouse from "./mixins/mouse";
import touch from "./mixins/touch";
import mobile from "./mixins/mobile";
import tablet from "./mixins/tablet";
import desktop from "./mixins/desktop";
import widescreen from "./mixins/widescreen";
import oldDesktop from "./mixins/oldDesktop";

class check {
  query: string;
  mediaMatch: MediaQueryList | undefined = undefined;

  constructor(userQuery: string | QueryType) {
    this.query = this.getQuery(userQuery);
  }

  private getQuery(userQuery: string | QueryType): string {
    if (typeof userQuery === "object") {
      return buildQuery(userQuery) as string;
    } else if (typeof userQuery === "string") {
      return userQuery;
    }
    return "";
  }

  then(callback: Function) {
    this.mediaMatch = window.matchMedia(this.query);
    if (this.mediaMatch.matches) {
      callback();
    }
    this.mediaMatch.addEventListener("change", () => {
      if (this.mediaMatch!.matches) {
        callback();
      }
    });
    return this;
  }
  catch(callback: Function) {
    this.mediaMatch = window.matchMedia(this.query);
    if (!this.mediaMatch.matches) {
      callback();
    }
    this.mediaMatch.addEventListener("change", () => {
      if (!this.mediaMatch!.matches) {
        callback();
      }
    });
    return this;
  }
}

const media = (userQuery: string | QueryType): check | Error => {
  if ("matchMedia" in window) {
    return new check(userQuery);
  } else {
    throw new Error("Your browser doesn't support `window.matchMedia` method");
  }
};

export { buildQuery };
export { mouse, touch, mobile, tablet, desktop, widescreen, oldDesktop };
export default media;
