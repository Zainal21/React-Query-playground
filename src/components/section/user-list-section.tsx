import { UserEntity } from "../../entity/user";
import { CardContent } from "../ui/card-content";

interface UserListSectionProps {
  users: UserEntity | unknown;
}

const UserListSection: React.FC<UserListSectionProps> = ({ users }) => {
  const userData = users as UserEntity;
  return (
    <h1 className="text-gray-600 text-3xl">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userData.data &&
          userData.data.length > 0 &&
          userData.data.map((user: any) => {
            return (
              <CardContent
                key={user.id}
                name={user.login}
                description={user.type}
                link={user.html_url}
                cta={`Github`}
                foregroundColor="gray-200"
                image={user.avatar_url}
              />
            );
          })}
      </ul>
    </h1>
  );
};

export default UserListSection;
