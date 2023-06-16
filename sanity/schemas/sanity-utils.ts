import { createClient, groq } from "next-sanity";

export async function getAudioItems() {
  const client = createClient({
    projectId: "13nz23e7",
    dataset: "production",
    apiVersion: "2023-05-10",
  });

  client.fetch(
    groq`*[_type == "audioitem " ]{
      
    }`
  )
} 

