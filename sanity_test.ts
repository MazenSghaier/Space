import {createClient} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset : process.env.SANITY_STUDIO_DATASET || "production",
    projectId : process.env.SANITY_STUDIO_PROJECT_ID || "egumyvxa",
    apiVersion : "2023-11-26",
    useCdn : process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config);

export const urlFor = (source:any) => {
    createImageUrlBuilder(config).image(source)
}