import Cosmic from "cosmicjs";

const api = Cosmic();

const bucket = api.bucket({
  slug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: process.env.NEXT_PUBLIC_COSMIC_BUCKET_READ_KEY,
});

export {api, bucket};
