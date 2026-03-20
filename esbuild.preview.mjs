import esbuild from "esbuild";

const result = await esbuild.build({
  entryPoints: ["preview/main.js"],
  bundle: true,
  format: "esm",
  platform: "browser",
  outfile: "preview/preview.js",
  loader: {
    ".html": "text",
    ".css": "text",
  },
});

console.log("Preview build result", result);
