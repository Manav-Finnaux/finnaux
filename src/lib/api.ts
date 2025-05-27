const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function fetchAPI<T>(endpoint: string): Promise<T> {
  const url = new URL(endpoint, BASE_URL);
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return (await response.json()).data;
}