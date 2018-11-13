var yourBrowser = "Chrome";
var ieLog = "We don't support IE browser!";
var webKitLog = "We support your browser = ";
var otherLog = "We hope your specific browser works fine";
 var ifElseResult;
if (yourBrowser === "IE") {
    ifElseResult = ieLog;
} else if (yourBrowser === "Chrome" || yourBrowser === "Firefox" || yourBrowser === "Opera" || yourBrowser === "Safari") {
    ifElseResult = webKitLog + yourBrowser;
} else {
    ifElseResult = otherLog;
}
console.log('IF - ELSE SOLUTION: ', ifElseResult);
 var switchResult;
// YOUR CODE GOES HERE
switch (yourBrowser) {
    case "IE":
       switchResult = ieLog;
       break;
    case "Chrome" || "Firefox" || "Opera" || "Safari":
       switchResult = webKitLog + yourBrowser;
       break;
    default:
        switchResult = otherLog;
}
console.log('SWITCH SOLUTION: ', switchResult);