import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import audioitem from "./sanity/schemas/audioitem.schemas";

const config = defineConfig({
  projectId: "13nz23e7",
  dataset: "production",
  title: "audio commerce",
  apiVersion: "2023-05-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [audioitem] },
});

export default config;
