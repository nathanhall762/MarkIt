import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './chunks/astro_B3M5hTmr.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"app/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/app","isIndex":false,"type":"page","pattern":"^\\/app\\/?$","segments":[[{"content":"app","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/app.astro","pathname":"/app","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"shop/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shop","isIndex":false,"type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop.astro","pathname":"/shop","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C6-M06oA.js"}],"styles":[{"type":"external","src":"/_astro/app.BwH4JL09.css"},{"type":"external","src":"/_astro/app.DDckG10Z.css"}],"routeData":{"route":"/qr/[qr]","isIndex":false,"type":"page","pattern":"^\\/qr\\/([^/]+?)\\/?$","segments":[[{"content":"qr","dynamic":false,"spread":false}],[{"content":"qr","dynamic":true,"spread":false}]],"params":["qr"],"component":"src/pages/qr/[qr].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Code/MarkIt/mark-it/src/pages/app.astro",{"propagation":"none","containsHead":true}],["C:/Code/MarkIt/mark-it/src/pages/qr/[qr].astro",{"propagation":"none","containsHead":true}],["C:/Code/MarkIt/mark-it/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Code/MarkIt/mark-it/src/pages/shop.astro",{"propagation":"in-tree","containsHead":true}],["C:/Code/MarkIt/mark-it/src/pages/shop/[id].astro",{"propagation":"in-tree","containsHead":true}],["C:/Code/MarkIt/mark-it/src/layouts/LayoutWebsite.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/shop@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/shop/[id]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/pages/node_JMB-8oVT.mjs","\u0000@astrojs-manifest":"manifest_CCh5Fjqd.mjs","C:/Code/MarkIt/mark-it/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Hb05nn4I.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_D4JpJU9v.mjs","\u0000@astro-page:src/pages/app@_@astro":"chunks/app_Bg_K2sVG.mjs","\u0000@astro-page:src/pages/qr/[qr]@_@astro":"chunks/_qr__CsjzLWJK.mjs","\u0000@astro-page:src/pages/shop/[id]@_@astro":"chunks/_id__mkEvixTI.mjs","\u0000@astro-page:src/pages/shop@_@astro":"chunks/shop_skk6o8vl.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Ch_aKaCC.mjs","C:/Code/MarkIt/mark-it/src/components/ItemVerificationPage":"_astro/ItemVerificationPage.CKHZQXwO.js","/astro/hoisted.js?q=0":"_astro/hoisted.C6-M06oA.js","/astro/hoisted.js?q=2":"_astro/hoisted.BGXSrf-w.js","/astro/hoisted.js?q=3":"_astro/hoisted.B6KKyv83.js","C:/Code/MarkIt/mark-it/src/components/Footer":"_astro/Footer.DZlHvs1R.js","C:/Code/MarkIt/mark-it/src/components/ItemImageCarousel":"_astro/ItemImageCarousel.DiS6k_5m.js","C:/Code/MarkIt/mark-it/src/components/Header":"_astro/Header.DVQbicPB.js","/astro/hoisted.js?q=1":"_astro/hoisted.12itU-xQ.js","C:/Code/MarkIt/mark-it/src/components/App.tsx":"_astro/App.BfWH4xZC.js","@astrojs/react/client.js":"_astro/client.tW14lfjf.js","C:/Code/MarkIt/mark-it/node_modules/firebase/auth/dist/esm/index.esm.js":"_astro/index.esm.DXEHGfWm.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/app.DDckG10Z.css","/_astro/app.BwH4JL09.css","/_astro/index.CSnqNvtS.css","/favicon.svg","/_astro/App.BfWH4xZC.js","/_astro/client.tW14lfjf.js","/_astro/Footer.DZlHvs1R.js","/_astro/Header.DVQbicPB.js","/_astro/hoisted.12itU-xQ.js","/_astro/hoisted.B6KKyv83.js","/_astro/hoisted.BGXSrf-w.js","/_astro/hoisted.C6-M06oA.js","/_astro/iconify.Gi37SqeE.js","/_astro/index.BG0d_8j_.js","/_astro/index.esm.DXEHGfWm.js","/_astro/index.esm2017.D2_RJB_Q.js","/_astro/ItemImageCarousel.DiS6k_5m.js","/_astro/ItemVerificationPage.CKHZQXwO.js","/_astro/jsx-runtime.CfVuv60F.js","/app/index.html","/shop/index.html","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
