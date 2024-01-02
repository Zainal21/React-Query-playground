export interface UserEntity {
  data: UserDetailEntity[];
}

interface UserDetailEntity {
  id: Number;
  name: string;
  description: string;
  cta: string;
  link: string;
}
