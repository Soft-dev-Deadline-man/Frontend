export interface IComment {
  blogId: string;
  authorId: string;
  title: string;
  description: string;
  recommendActivity: string;
  spendTime: string;
  rating: number;
  score: number; //vote-up, vote-down
  images: string[];
}

export interface ICommentInfo {
    blogId : string;
  title: string;
  author : {
    name : string
    profile : string
    _id : string
  }
  description: string;
  recommendActivity: string;
  spendTime: string;
  rating: number;
  score: number; //vote-up, vote-down
  images: string[];
}
