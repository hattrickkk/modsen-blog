import path from "path";

export function webpack(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve("/"),
  };

  return config;
}
