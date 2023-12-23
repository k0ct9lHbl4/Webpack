import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export const buildBabelLoader = ({ mode }: BuildOptions) => {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins = [];

  if (isProd) {
    plugins.push([removeDataTestIdBabelPlugin, { props: ["data-test-id"] }]);
  }

  return {
    test: /\.tsx?$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            [
              "@babel/preset-react",
              { runtime: isDev ? "automatic" : "classic" },
            ],
            "@babel/preset-typescript",
          ],
          plugins: plugins.length ? plugins : undefined,
        },
      },
    ],
  };
};
