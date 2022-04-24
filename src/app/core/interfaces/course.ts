export interface Course {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  topics: string[];
  tags: string[];
  price: number;
  seen: boolean;
}
