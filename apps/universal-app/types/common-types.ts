import { AriaRole, CSSProperties } from 'react';

export interface CommonUIElementProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  dataTestId?: string;
  role?: AriaRole;
}
