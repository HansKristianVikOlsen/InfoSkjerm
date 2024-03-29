const baseUrl = "https://vglive.no/api/vg/participants/teams/22988";
const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1877/standings?type=live-changes";

export function getNextMatches() {
  return fetch(baseUrl).then(res => res.json());
}
export function getTableData() {
  return fetch(tableUrl).then(res => res.json());
}
