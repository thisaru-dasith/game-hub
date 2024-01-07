import { useEffect, useState } from "react";
import ClinetApi from "../Services/Clinet-api";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

function UseGenre() {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    ClinetApi.get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenre(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error };
}

export default UseGenre;
