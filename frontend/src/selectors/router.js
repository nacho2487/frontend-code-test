import { QUERY_PARM_SEARCH } from "../constants";

export function getSearchQuery({ router }) {
  const urlParms = new URLSearchParams(router.location.search);
  return urlParms.get(QUERY_PARM_SEARCH);
}
