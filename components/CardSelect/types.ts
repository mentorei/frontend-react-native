export interface CardProps {
  text: string;
  selected?: boolean;
  id: string | number;
  onPress?: (id: string | number) => void;
}

export interface FormProps {
  onSelected?: (id: string | number) => void;
  data: Array<{ text: string; id: number | string }>;
}
