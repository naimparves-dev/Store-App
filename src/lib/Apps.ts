export const getApps = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/data.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch apps");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching apps:", error);
    return [];
  }
};