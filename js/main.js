var path = window.location.pathname;
var page = path.split("/").pop();

import autoInit from "@material/auto-init";

autoInit();

if (page === "index.html") {
  // const checkbox = new MDCCheckbox(document.querySelector(".mdc-checkbox"));
  // const textarea = new MDCTextField(document.querySelector(".mdc-text-field"));
  // const ripple = new MDCRipple(document.querySelector(".foo-button"));
}
