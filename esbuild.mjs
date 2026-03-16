import esbuild from "esbuild"

const result = await esbuild.build({
  entryPoints: ['lib/plugin.js'],
  bundle: true,
  format: "cjs",
  outfile: "build/compiled.js",
  platform: "node",
  write: true,
  jsxFactory: "h",
  jsxFragment: "Fragment",
  loader: {
    ".html": "text",
    ".jsx": "jsx"
  }
})

console.log("Build result", result)