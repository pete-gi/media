type Unit =
  // absolute units
  | "px"
  | "cm"
  | "mm"
  | "in"
  | "pc"
  | "pt"
  // experimental absolute units
  | "Q"
  // relative units
  | "ch"
  | "em"
  | "ex"
  | "rem"
  | "vh"
  | "vw"
  | "vmin"
  | "vmax"
  // experimental relative units
  | "ic"
  | "lh"
  | "rlh"
  | "vi"
  | "vb";

export default Unit;
