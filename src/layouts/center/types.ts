import {
  ChildSizeProps,
  LayoutPropsBase,
  OrientationProps,
  SpacingProps,
} from '../types';

export type CenterLayoutProps = LayoutPropsBase<'center'> &
  ChildSizeProps &
  OrientationProps &
  SpacingProps;
