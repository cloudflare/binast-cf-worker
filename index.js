async function fetchOrigin(path) {
  return fetch("https://xtuc.github.io/binjs-demo/build" + path);
}

async function fetchOriginJS(path) {
  const res = await fetchOrigin(toExtBinJs(path));

  if (res.status === 404) {
    // fallback to js
    return fetchOrigin(path);
  } else {
    return res;
  }
}

function toBinastContentType(originalRes) {
  const res = new Response(originalRes.body, originalRes);
  res.headers.set("Content-Type", "application/javascript-binast");
  return res;
}

function toExtJS(path) {
  const parts = path.split(".");
  parts[parts.length - 1] = "js";
  return parts.join(".");
}

function toExtBinJs(path) {
  const parts = path.split(".");
  parts[parts.length - 1] = "binjs";
  return parts.join(".");
}

async function handleRequest(request) {
  let path = (new URL(request.url)).pathname;
  const supportBinJs = request.headers.get("Accept")
    .split(",").includes("application/javascript-binast");
  const lastSegment = path.substring(path.lastIndexOf('/'))
  const serveBinJs = lastSegment.endsWith(".js") && supportBinJs;

  if (lastSegment.indexOf('.') === -1) {
    path += '/index.html'
  }

  if (serveBinJs === true) {
    const res = await fetchOriginJS(path);
    return toBinastContentType(res);
  } else {
    return fetchOrigin(path);
  }
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

// Test
if (module.exports !== undefined) {
  module.exports = { toExtJS, toExtBinJs };
}
