export const getTopheadlines = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/trendingNews`
    );
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: "Failed to fetch external data" };
  }
};

export const fetchNews = async (query) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/pickNews?q=${query}`
    );

    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: "Failed to fetch external data" };
  }
};
