import { RFValue } from 'react-native-responsive-fontsize';

type Unity = 'pixel' | 'percentage';

const units = { pixel: 'px', percentage: '%' };

export const getSize = (value: number, unity?: Unity): string => {
  if (!unity) return `${RFValue(value)}${units.pixel}`;
  return `${RFValue(value)}${units[unity]}`;
};
