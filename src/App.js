import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'

/**
 *  Создание локальных стилей
 */

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title color={"cyan"}>
          Simple Console 2022. O'dan
        </Title>
      </Flex>
      <Flex direction="column" margin={"10px 0"}>
        <Console/>
        <Button outlined color="red" align="flex-end">
          Clear
        </Button>
        <Button primary color="black" background="cyan" align="flex-end">
          Send
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App
