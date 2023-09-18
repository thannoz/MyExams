import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === "development";
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY": JSON.stringify(
        env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY
      ),
    },
    plugins: [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
