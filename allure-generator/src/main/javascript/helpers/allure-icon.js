import { SafeString } from "handlebars/runtime";
import translate from "./t";

const icons = {
  flaky: {
    className: "fa fa-bomb",
    tooltip: "marks.flaky",
  },
  newFailed: {
    className: "fa fa-times-circle",
    tooltip: "marks.newFailed",
  },
  newBroken: {
    className: "fa fa-exclamation-circle",
    tooltip: "marks.newBroken",
  },
  newPassed: {
    className: "fa fa-check-circle",
    tooltip: "marks.newPassed",
  },
  retriesStatusChange: {
    className: "fa fa-refresh",
    tooltip: "marks.retriesStatusChange",
  },
  failed: {
    className: "fa fa-times-circle fa-fw text_status_failed",
    tooltip: "status.failed",
  },
  broken: {
    className: "fa fa-exclamation-circle fa-fw text_status_broken",
    tooltip: "status.broken",
  },
  passed: {
    className: "fa fa-check-circle fa-fw text_status_passed",
    tooltip: "status.passed",
  },
  skipped: {
    className: "fa fa-minus-circle fa-fw text_status_skipped",
    tooltip: "status.skipped",
  },
  unknown: {
    className: "fa fa-question-circle fa-fw text_status_unknown",
    tooltip: "status.unknown",
  },
  chrome: {
    className: "fa-brands fa-chrome",
    tooltip: "browser.chrome",
  },
  firefox: {
    className: "fa-brands fa-firefox-browser",
    tooltip: "browser.firefox",
  },
  edge: {
    className: "fa-brands fa-edge-legacy",
    tooltip: "browser.edge",
  },
  ie: {
    className: "fa-brands fa-internet-explorer",
    tooltip: "browser.internet-explorer",
  },
  safari: {
    className: "fa-brands fa-safari",
    tooltip: "browser.safari",
  },
  apple: {
    className: "fa-brands fa-apple",
    tooltip: "platform.apple",
  },
  android: {
    className: "fa-brands fa-android",
    tooltip: "platform.android",
  },
};

export default function(value, opts) {
  const {
    hash: { extraClasses = "", noTooltip = false },
  } = opts;
  const icon = icons[value];
  return icon
    ? new SafeString(
        `<span class="${icon.className} ${extraClasses}" ${
          noTooltip ? "" : `data-tooltip="${translate(icon.tooltip)}"`
        }></span>`,
      )
    : "";
}
