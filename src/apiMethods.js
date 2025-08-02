export const getTopheadlines = async () => {
  try {
    const response = await fetch("http://localhost:3000/trendingNews");
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: "Failed to fetch external data" };
  }
};

export const fetchNews = async (query) => {
  try {
    const response = await fetch(`http://localhost:3000/pickNews?q=${query}`);
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: "Failed to fetch external data" };
  }
};
