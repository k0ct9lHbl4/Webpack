import webpack from "webpack";
import path from "path";

import { buildWebpack } from "./config/build/buildWebpack";

import type {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  platform: BuildPlatform;
  analyzer: boolean;
}

export default (env: Partial<EnvVariables>) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    paths,
    platform: env.platform ?? "desktop",
    analyzer: env.analyzer,
  });

  return config;
};
