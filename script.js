// taking those values from 3 textareas and based on that show in iframe

function catchCode() {
    const htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");
    let output = document.getElementById("output");
  
    //   showing values from html css and js textarea into the iframe:
    output.contentDocument.body.innerHTML =
      htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value);
    //   evaluate js code
    //   css is not text and a styling component, ao it is inside style tag
  
    // similar for js
  }