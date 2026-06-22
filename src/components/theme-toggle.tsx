import { HStack, Switch, Text, useColorMode } from 'native-base'
import React from 'react'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch isChecked={colorMode === 'dark'} onToggle={toggleColorMode} />
      <Text>Light</Text>
    </HStack>
  )
}
