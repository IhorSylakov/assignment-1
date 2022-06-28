export interface IPost {
  id: string;
  message: string;
  created_time: number;
  from_id: string;
  from_name: string;
  status: string;
}

export interface IUserPost {
  id: string;
  message: string;
  created_time: number;
}

export interface IUser {
  from_id: string;
  from_name: string;
  posts_count: number;
}