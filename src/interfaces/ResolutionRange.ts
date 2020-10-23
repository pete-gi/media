import ResolutionUnit from "types/ResolutionUnit";
import Resolution from "./Resolution";

interface ResolutionRange {
  min: string | Resolution | [number, ResolutionUnit];
  max: string | Resolution | [number, ResolutionUnit];
}

export default ResolutionRange;
