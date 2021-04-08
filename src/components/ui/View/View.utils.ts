import { ViewVariant } from './View.props'

export const viewVariants: Record<ViewVariant, any> = {
  screen: {
    flex: 1,
    pt: 'defaultTopInset',
    pb: 'defaultBottomInset',
    pl: 'defaultLeftInset',
    pr: 'defaultRightInset',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}
