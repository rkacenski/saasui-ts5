import { useState } from 'react'
import { Card, CardHeader, CardBody, Text } from '@chakra-ui/react'
import { Persona } from '@saas-ui/react'

function App() {

  return (
    <>
      <Card maxW="400px">
        <CardHeader>
          <Persona
            name="Eelco Wiersma"
            secondaryLabel="Algarve, Portugal"
            size="md"
            flex="1"
          />
        </CardHeader>
        <CardBody>
          <Text fontSize="md">
            Currently building amazing things in the sunny Algarve.
          </Text>
        </CardBody>
      </Card>
    </>
  )
}

export default App
