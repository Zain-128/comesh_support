/** Base URL including global prefix, e.g. https://host/comesh/api — no trailing slash */
export function getApiBaseUrl() {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw && String(raw).trim()) {
    return String(raw).replace(/\/$/, "");
  }
  return "https://comesh-app-backend.onrender.com/comesh/api";
}
