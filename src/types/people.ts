export type People = {
  id: string;
  name: string | undefined;
  amounts: {
    id: string;
    value: number | undefined;
  }[];
};
