export type CardProps = {
  text: string;
  selected?: boolean;
  id: string | number;
  onPress?: (id: string | number) => void;
};

export type FormProps = {
  onSelected?: (id: string | number) => void;
  data: { text: string; id: number | string }[];
};
