export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Login {
  error: string | null;
  userId: string;
  token: string;
}
