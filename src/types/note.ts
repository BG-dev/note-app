import ITag from "./tag";

export default interface INote {
  id: number;
  title: string;
  content: string;
  tags: ITag[];
}
