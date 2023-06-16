import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
  projectId: "13nz23e7",
  dataset: "production",
  title: "audio commerce",
  apiVersion: "2023-05-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
