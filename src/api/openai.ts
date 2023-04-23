import axios from "axios";

export async function getCompletion(titles: string[]): Promise<string> {
  const res = axios.get(
    import.meta.env.VITE_OPENAI_API_PROVIDER + "/recommend",
    {
      params: {
        titles: titles.join(","),
      },
    }
  );

  return (await res).data;
}

export async function getAbout(titles: string[]): Promise<string> {
  const res = axios.get(import.meta.env.VITE_OPENAI_API_PROVIDER + "/about", {
    params: {
      titles: titles.join(","),
    },
  });

  return (await res).data;
}
