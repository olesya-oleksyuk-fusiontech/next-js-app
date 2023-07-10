export type PostInListType = {
  id: string;
  title: string;
  date: string;
};

export type PostType = PostInListType & {
  body: string;
  tags: string[];
};
