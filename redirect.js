const params = new URLSearchParams(window.location.search);
const status = params.get("status");

switch (status) {
  case "111":
    window.location.href = "success.html";
    break;
  case "222":
    window.location.href = "terminated.html";
    break;
  case "333":
    window.location.href = "quota.html";
    break;
  case "444":
    window.location.href = "flagged.html";
    break;
  default:
    document.body.innerHTML = "<h2>Invalid or missing status code.</h2>";
}
