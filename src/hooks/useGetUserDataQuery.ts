import { useQuery } from "react-query";

const envGithubBaseUrl = import.meta.env.VITE_GITHUB_BASE_URL;

export const useUserData = () => {
  return useQuery(
    ["users"],
    async () => {
      const response = await fetch(`${envGithubBaseUrl}/users`);
      return response.json();
    },
    {
      enabled: false,
    }
  );
};
