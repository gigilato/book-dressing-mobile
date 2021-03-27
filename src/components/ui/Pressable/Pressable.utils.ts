export const PRESSABLE_ANIM_START = 0
export const PRESSABLE_ANIM_END = 1
export const getPressableAnimationConfig = (toValue: number) => ({
  toValue,
  mass: 1,
  damping: 15,
  stiffness: 120,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
})
