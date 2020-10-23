import Unit from "types/Unit";
import Length from "./Length";

interface LengthRange {
  min?: string | Length | [number, Unit];
  max?: string | Length | [number, Unit];
}

export default LengthRange;
