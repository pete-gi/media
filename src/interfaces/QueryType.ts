import ResolutionUnit from "types/ResolutionUnit";
import Unit from "types/Unit";
import Length from "./Length";
import LengthRange from "./LengthRange";
import Resolution from "./Resolution";
import ResolutionRange from "./ResolutionRange";

interface QueryType {
  /**
   * Suitable for all devices
   *
   * `boolean`
   *
   * _Media Queries Level 3_
   */
  all?: boolean;
  /**
   * Intended for paged material and documents viewed on a screen in print preview mode
   *
   * `boolean`
   *
   * _Media Queries Level 3_
   */
  print?: boolean;
  /**
   * Intended primarily for screens
   *
   * `boolean`
   *
   * _Media Queries Level 3_
   */
  screen?: boolean;
  /**
   * Intended for speech synthesizers
   *
   * `boolean`
   *
   * _Media Queries Level 3_
   */
  speech?: boolean;
  /**
   * Negate next property. **Use only once!**
   *
   * `boolean`
   *
   * _Media Queries Level 3_
   */
  not?: boolean;

  /**
   * Does any available input mechanism allow the user to hover over elements?
   *
   * `none` or `hover`
   *
   * _Media Queries Level 4_
   *
   * _Chrome 41, Edge 16, Firefox 64, Safari 9, ~~IE~~_
   */
  "any-hover"?: "none" | "hover";
  /**
   * Does the primary input mechanism allow the user to hover over elements?
   *
   * `none` or `hover`
   *
   * _Media Queries Level 4_
   *
   * _Chrome 41, Edge 16, Firefox 64, Safari 9, ~~IE~~_
   */
  hover?: "none" | "hover";

  /**
   * Is any available input mechanism a pointing device, and if so, how accurate is it?
   *
   * `none`, `coarse` or `fine`
   *
   * _Media Queries Level 4_
   *
   * _Chrome 41, Edge 12, Firefox 64, Safari 9, ~~IE~~_
   */
  "any-pointer"?: "none" | "coarse" | "fine";
  /**
   * Is the primary input mechanism a pointing device, and if so, how accurate is it?
   *
   * `none`, `coarse` or `fine`
   *
   * _Media Queries Level 4_
   *
   * _Chrome 41, Edge 12, Firefox 64, Safari 9, ~~IE~~_
   */
  pointer?: "none" | "coarse" | "fine";

  /**
   * Width-to-height aspect ratio of the viewport
   *
   * `number/number` format
   *
   * _Media Queries Level 3_
   *
   * _Chrome 3, Edge 12, Firefox 3.5, Safari 5, IE9_
   */
  "aspect-ratio"?: string;
  /**
   * Width-to-height aspect ratio of the viewport
   *
   * `number/number` format
   *
   * _Media Queries Level 3_
   *
   * _Chrome 3, Edge 12, Firefox 3.5, Safari 5, IE9_
   */
  "min-aspect-ratio"?: string;
  /**
   * Width-to-height aspect ratio of the viewport
   *
   * `number/number` format
   *
   * _Media Queries Level 3_
   *
   * _Chrome 3, Edge 12, Firefox 3.5, Safari 5, IE9_
   */
  "max-aspect-ratio"?: string;

  /**
   * Number of bits per color component of the output device, or zero if the device isn't color
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, ~~IE~~_
   */
  color?: boolean;
  /**
   * Number of bits per color component of the output device, or zero if the device isn't color
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, ~~IE~~_
   */
  "min-color"?: number;
  /**
   * Number of bits per color component of the output device, or zero if the device isn't color
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, ~~IE~~_
   */
  "max-color"?: number;

  /**
   * Approximate range of colors that are supported by the user agent and output device
   *
   * `srgb`, `p3` or `rec2020`
   *
   * _Media Queries Level 4_
   *
   * _Chrome 58, Edge 79, ~~Firefox~~, Safari 10, ~~IE~~_
   */
  "color-gamut"?: "srgb" | "p3" | "rec2020";

  /**
   * Number of entries in the output device's color lookup table, or zero if the device does not use such a table
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 29, Edge 79, ~~Firefox~~, Safari 8, ~~IE~~_
   */
  "color-index"?: number;
  /**
   * Number of entries in the output device's color lookup table, or zero if the device does not use such a table
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 29, Edge 79, ~~Firefox~~, Safari 8, ~~IE~~_
   */
  "min-color-index"?: number;
  /**
   * Number of entries in the output device's color lookup table, or zero if the device does not use such a table
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 29, Edge 79, ~~Firefox~~, Safari 8, ~~IE~~_
   */
  "max-color-index"?: number;

  /**
   * The display mode of the application, as specified in the web app manifest's display member
   *
   * `fullscreen`, `standalone`, `minimal-ui` or `browser`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 45, Edge 79, Firefox 47, Safari 13, ~~IE~~_
   */
  "display-mode"?: "fullscreen" | "standalone" | "minimal-ui" | "browser";

  /**
   * Detect whether user agent restricts color palette
   *
   * `none` or `active`
   *
   * _Media Queries Level 5_
   *
   * _Chrome 79, Edge 79, Firefox 89, ~~Safari~~, ~~IE~~_
   */
  "forced-colors"?: "none" | "active";

  /**
   * Does the device use a grid or bitmap screen?
   *
   * `0` or `1`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE10_
   */
  grid?: 0 | 1;

  /**
   * Width of the viewport including width of scrollbar
   *
   * `string`, `{ value, unit }`, `[value, unit] `, or `{ min?: {  }, max?: {  } }`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE9_
   */
  width?: string | LengthRange | Length | [number, Unit];
  /**
   * Width of the viewport including width of scrollbar
   *
   * `string`, `{ value, unit }` or `[value, unit]`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE9_
   */
  "min-width"?: string | Length | [number, Unit];
  /**
   * Width of the viewport including width of scrollbar
   *
   * `string`, `{ value, unit }` or `[value, unit]`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE9_
   */
  "max-width"?: string | Length | [number, Unit];

  /**
   * Height of the viewport
   *
   * `string`, `{ value, unit }`, `[value, unit] `, or `{ min?: {  }, max?: {  } }`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE9_
   */
  height?: string | LengthRange | Length | [number, Unit];
  /**
   * Height of the viewport
   *
   * `string`, `{ value, unit }` or `[value, unit]`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE9_
   */
  "min-height"?: string | Length | [number, Unit];
  /**
   * Height of the viewport
   *
   * `string`, `{ value, unit }` or `[value, unit]`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 12, Firefox 2, Safari 3, IE9_
   */
  "max-height"?: string | Length | [number, Unit];

  /**
   * Is the user agent or underlying OS inverting colors?
   *
   * `none` or `inverted`
   *
   * _Media Queries Level 5_
   *
   * _~~Chrome~~, ~~Edge~~, ~~Firefox~~, Safari 9.1, ~~IE~~_
   */
  "inverted-colors"?: "none" | "inverted";

  /**
   * Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome
   *
   * `boolean` or `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 79, Firefox 2, Safari 3, ~~IE~~_
   */
  monochrome?: boolean | number;
  /**
   * Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 79, Firefox 2, Safari 3, ~~IE~~_
   */
  "min-monochrome"?: number;
  /**
   * Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome
   *
   * `number`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 1, Edge 79, Firefox 2, Safari 3, ~~IE~~_
   */
  "max-monochrome"?: number;

  /**
   * Orientation of the viewport
   *
   * `portrait` or `landscape`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 3, Edge 12, Firefox 2, Safari 5, IE9_
   */
  orientation?: "portrait" | "landscape";

  /**
   * How does the output device handle content that overflows the viewport along the block axis?
   *
   * `none`, `scroll`, `optional-paged` or `paged`
   *
   * _Media Queries Level 4_
   *
   * _~~Chrome~~, ~~Edge~~, Firefox 66, ~~Safari~~, ~~IE~~_
   */
  "overflow-block"?: "none" | "scroll" | "optional-paged" | "paged";
  /**
   * Can content that overflows the viewport along the inline axis be scrolled?
   *
   * `none` or `scroll`
   *
   * _Media Queries Level 4_
   *
   * _~~Chrome~~, ~~Edge~~, Firefox 66, ~~Safari~~, ~~IE~~_
   */
  "overflow-inline"?: "none" | "scroll";

  /**
   * Detect if the user prefers a light or dark color scheme
   *
   * `light` or `dark`
   *
   * _Media Queries Level 5_
   *
   * _Chrome 76, Edge 79, Firefox 67, Safari 12.1, ~~IE~~_
   */
  "prefers-color-scheme"?: "light" | "dark";
  /**
   * Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors
   *
   * `no-preference`, `more` or `less`
   *
   * _Media Queries Level 5_
   *
   * _~~Chrome~~, ~~Edge~~, Firefox 80, ~~Safari~~_
   */
  "prefers-contrast"?: "no-preference" | "more" | "less";
  /**
   * The user prefers less motion on the page
   *
   * `no-preference` or `reduce`
   *
   * _Media Queries Level 5_
   *
   * _Chrome 74, Edge 79, Firefox 63, Safari 10.1, ~~IE~~_
   */
  "prefers-reduced-motion"?: "no-preference" | "reduce";
  /**
   * The user prefers reduced transparency
   *
   * `no-preference` or `reduce`
   *
   * _Media Queries Level 5_
   *
   * _~~Chrome~~, ~~Edge~~, ~~Firefox~~, ~~Safari~~, ~~IE~~_
   */
  "prefers-reduced-transparency"?: "no-preference" | "reduce";

  /**
   * Pixel density of the output device
   *
   * `string`, `{ value, unit }`, `[value, unit] `, or `{ min?: {  }, max?: {  } }`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 29, Edge 12, Firefox 8, ~~Safari~~, IE9_
   */
  resolution?: string | ResolutionRange | Resolution | [number, ResolutionUnit];
  /**
   * Pixel density of the output device
   *
   * `string`, `{ value, unit }` or `[value, unit]`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 29, Edge 12, Firefox 8, ~~Safari~~, IE9_
   */
  "min-resolution"?: string | Resolution | [number, ResolutionUnit];
  /**
   * Pixel density of the output device
   *
   * `string`, `{ value, unit }` or `[value, unit]`
   *
   * _Media Queries Level 3_
   *
   * _Chrome 29, Edge 12, Firefox 8, ~~Safari~~, IE9_
   */
  "max-resolution"?: string | Resolution | [number, ResolutionUnit];

  /**
   * Scanning process of the output device
   *
   * `interlace` or `progressive`
   *
   * _Media Queries Level 3_
   *
   * _~~Chrome~~, ~~Edge~~, ~~Firefox~~, ~~Safari~~, ~~IE~~_
   */
  scan?: "interlace" | "progressive";

  /**
   * Browser scripting language is available
   *
   * `none`, `initial-only` or `enabled`
   *
   * _Media Queries Level 5_
   *
   * _~~Chrome~~, ~~Edge~~, ~~Firefox~~, ~~Safari~~, ~~IE~~_
   */
  scripting?: "none" | "initial-only" | "enabled";

  /**
   * How frequently the output device can modify the appearance of content
   *
   * `none`, `slow` or `fast`
   *
   * _Media Queries Level 4_
   *
   * _~~Chrome~~, ~~Edge~~, ~~Firefox~~, ~~Safari~~, ~~IE~~_
   */
  update?: "none" | "slow" | "fast";
}

export default QueryType;
