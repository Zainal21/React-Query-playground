import { useQuery } from "react-query";
import PageLayout from "./layouts/page-layouts";
import Container from "./components/ui/container";
import { useEffect } from "react";
import UserListSection from "./components/section/user-list-section";
const envGithubBaseUrl: string = import.meta.env.VITE_GITHUB_BASE_URL;

function App() {
  const userData = useQuery(
    ["users"],
    async (): Promise<any> => {
      const response = await fetch(`${envGithubBaseUrl}/users`);
      return await response.json();
    },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    userData.refetch();
  }, []);

  if (userData.isFetching) {
    return (
      <PageLayout>
        <Container
          className={`mx-auto flex justify-center items-center my-10 `}
        >
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            ></div>
          </div>
        </Container>
      </PageLayout>
    );
  }

  if (userData.isError) {
    return (
      <PageLayout>
        <Container className={`mx-auto flex justify-center items-center my-10`}>
          <h1 className="text-3xl text-gray-700 font-bold transition ease-in-out delay-150">
            Error ...
          </h1>
        </Container>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Container className={`my-5`}>
        <UserListSection users={userData} />
      </Container>
    </PageLayout>
  );
}

export default App;
