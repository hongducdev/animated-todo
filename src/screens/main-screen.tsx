import { Box, Center, Text, VStack, useColorModeValue } from 'native-base'
import React, { useCallback, useState } from 'react'
import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'

const MainScreen = () => {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked((prev) => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
      px={4}
    >
      <VStack space={4} alignItems="center">
        <Box bg={useColorModeValue('blueGray.50', 'blueGray.900')}>
          <Text color={useColorModeValue('blueGray.900', 'blueGray.50')}>MainScreen</Text>
        </Box>
        <ThemeToggle />
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
      </VStack>
    </Center>
  )
}

export default MainScreen
