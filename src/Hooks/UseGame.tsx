import { useEffect, useState } from "react";
import ClinetApi from "../Services/Clinet-api";
import { CanceledError } from "axios";
import { Genre } from "./UseGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function UseGame(selectedGenre: Genre | null, deps?: any[]) {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      //api.rawg.io/api
      const controller = new AbortController();
      setLoading(true);
      ClinetApi.get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: { genres: selectedGenre?.id },
      })
        .then((res) => {
          setLoading(false);
          setGames(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setLoading(false);
          setError(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { games, error, isLoading };
}
export default UseGame;
