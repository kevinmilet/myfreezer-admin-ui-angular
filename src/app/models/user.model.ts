export class User {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  created_at!: string;
  updated_at!: string | null;
  accountId!: string;
  isAdmin!: boolean;
  isActive!: boolean;
}
