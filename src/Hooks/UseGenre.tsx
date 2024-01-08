import { useEffect, useState } from "react";
import ClinetApi from "../Services/Clinet-api";
import { CanceledError } from "axios";
import { Spinner } from "@chakra-ui/react";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
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
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default UseGenre;
