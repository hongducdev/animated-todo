import { Box, HStack, Text } from 'native-base'
import { memo, useEffect } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming
} from 'react-native-reanimated'

interface Props {
  strikeThrough: boolean
  textColor: string
  inactiveTextColor: string
  onPress?: () => void
  children?: React.ReactNode
}

const AnimatedBox = Animated.createAnimatedComponent(Box)
const AnimatedHStack = Animated.createAnimatedComponent(HStack)
const AnimatedText = Animated.createAnimatedComponent(Text)

const AnimatedTaskLabel = memo((props: Props) => {
  const { strikeThrough, textColor, inactiveTextColor, onPress, children } =
    props

  const hStackOffset = useSharedValue(0)
  const hStackAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: hStackOffset.value }]
    }
  }, [strikeThrough])

  const textColorProgress = useSharedValue(0)
  const textColorAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      )
    }
  }, [textColor, inactiveTextColor, strikeThrough])

  const striketroughWidth = useSharedValue(0)
  const striketroughAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: `${striketroughWidth.value * 100}%`,
      borderBottomColor: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      )
    }
  }, [striketroughWidth, textColor, inactiveTextColor, textColorProgress])

  useEffect(() => {
    const easing = Easing.out(Easing.quad)
    if (strikeThrough) {
      hStackOffset.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing })
      )
      striketroughWidth.value = withTiming(1, { duration: 400, easing })
      textColorProgress.value = withDelay(
        1000,
        withTiming(1, { duration: 400, easing })
      )
    } else {
      textColorProgress.value = withTiming(0, { duration: 400, easing })
      striketroughWidth.value = withTiming(0, { duration: 400, easing })
    }
  }, [strikeThrough])

  return (
    <Pressable onPress={onPress}>
      <AnimatedHStack alignItems="center" style={[hStackAnimatedStyle]}>
        <AnimatedText
          fontSize={19}
          noOfLines={1}
          px={1}
          isTruncated
          style={[textColorAnimatedStyle]}
        >
          {children}
        </AnimatedText>
        <AnimatedBox
          position={'absolute'}
          h={1}
          borderBottomWidth={1}
          style={[striketroughAnimatedStyle]}
        />
      </AnimatedHStack>
    </Pressable>
  )
})

export default AnimatedTaskLabel
