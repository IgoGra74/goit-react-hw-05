const API_REQUEST_TEMPLATE = {
  baseURL: "https://api.themoviedb.org/3/",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTJjOTRmNWZhNWVmNTMxY2M5ZGZhYTBhOTYwZmYxNyIsInN1YiI6IjY2MDkyNzNhZDRmZTA0MDE3YzJhMzc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEkEt_-LzYjq6JSyF--2DSj0F8tnxODl0Pfw1-3Qfls",
  },
};

export default API_REQUEST_TEMPLATE;
