const backendUrl = "https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io";

export function formatLocationsUrl() {
  return backendUrl + "/locations";
}

export function formatCamUrl(locationId: string) {
  return `${backendUrl}/cam/${locationId}`;
}

export function formatProductsUrl(lpn: string) {
  return `${backendUrl}/products/${lpn}`;
}

export function formatStartWashUrl(locationId: string, programId: number) {
  return `${backendUrl}/${locationId}/start/${programId}`;
}
