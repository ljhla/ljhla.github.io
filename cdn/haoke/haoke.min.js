function _howxm() {
  _howxmQueue.push(arguments);
}
window._howxmQueue = window._howxmQueue || [];
_howxm("setAppID", "7dd6ab07-bc2e-4eb4-a75f-1f9f82711363");
(function () {
  var scriptId = "howxm_script";
  if (!document.getElementById(scriptId)) {
    var e = document.createElement("script"),
      t = document.getElementsByTagName("script")[0];
    e.setAttribute("id", scriptId);
    e.type = "text/javascript";
    e.async = !0;
    e.src = "https://static.howxm.com/sdk.js";
    t.parentNode.insertBefore(e, t);
  }
})();
