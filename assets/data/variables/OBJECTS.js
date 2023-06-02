// This file is used to hold some objects

import Project from "../classes/Project";

import {
  ACCOUNT_GUARD_IMG,
  ANIMEX_STREAMING_IMG,
  A_FRESH_PLACE_IMG,
  FAUNAANDFLORA_IMG,
  FILEZOID_IMG,
  ONLYJOJO_IMG,
  RTSYVISUALS_IMG,
  SHARPQUILLS_IMG,
} from "../../cdns/CDNImgs";
import { PYQT, PYTHON, SQL, SASS, NEXTJS, REACT } from "../../cdns/CDNIcons";

const RTSYVISUALS_OBJ = new Project(
  001,
  "RTSYVisuals",
  "A photography-based website.",
  "Rick Dingwall, NC",
  "2023 - 2023",
  RTSYVISUALS_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/rtsyvisuals",
  "https://rtsyvisuals.com/"
);

export {};
