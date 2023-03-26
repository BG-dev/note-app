import ITag from "./tag";

export default interface INote {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: ITag[];
}
