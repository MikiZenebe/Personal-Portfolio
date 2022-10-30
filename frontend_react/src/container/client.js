import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "805fnoli",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "skspFZImt396hgHLH3gmDDC71NVmnX6z6BK4fpJyG8z68DVOHVnKNjtaON3AAPocIx0BbjwhJIvTyvMXisBEhDyX2E2XfiW7UZCC1hSv7BgRyp57HV6njL244m8yqKxfU61U6mf6avsCLZs3R31eqV2kwDcEYk6hl4QmtUT2GEZcfHFYtZJM",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
