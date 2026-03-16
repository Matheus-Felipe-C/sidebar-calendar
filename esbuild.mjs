import esbuild from "esbuild"

const result = await esbuild.build({
    entryPoints: ['lib/plugin.js'],
    bundle: true,
    format: "iife",
    outfile: "build/compiled.js",
    packages: "external",
    platform: "node",
    write: true,

    loader: {
        ".html": "text",
    },  
})

console.log("Build result", result)