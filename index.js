// @ts-check
import { domChange } from "./domListener";
import { getLogoNode } from "./logo";
import "./style.css";
import "./generatedFixes.css";

export function init(context) {
  const rcp = context.rcp;

  rcp.whenReady("rcp-fe-lol-uikit").then((_uikit) => {
    domChange.on(replaceLogoVideo);
  });
}

function replaceLogoVideo() {
  if (!document.querySelector(".league-static-logo")) {
    const logoVideo = document.querySelector(".league-client-logo.ember-view");
    logoVideo?.parentNode?.appendChild(getLogoNode());
  }
}
