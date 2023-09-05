export interface RadioButtonProps {
  color: string;
  selected?: boolean;
  id: string | number;
  onPress?: (id: string | number) => void;
}

export interface RadioButtonFormProps {
  onSelected?: (id: string | number) => void;
  children: React.ReactNode;
  default?: string | number;
}
