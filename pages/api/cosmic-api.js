import Cosmic from "cosmicjs";

const api = Cosmic();

const bucket = api.bucket({
  slug: "kiuti-cms-production",
  read_key: "00AtyYqL4bhq2M1lTZ02lR7dcX5iKQeWXoxUdiZBCh2CnakN8d",
});

export {api, bucket};
