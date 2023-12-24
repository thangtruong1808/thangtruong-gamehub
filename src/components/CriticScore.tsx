import { Badge } from '@chakra-ui/react'
import { Score } from '@mui/icons-material'
import React from 'react'

interface Props{
    score: number,
}

const CriticScore = ({ score }: Props) => {
    let color = score>=90 ? 'green': score>80 ? 'yellow': 'gray'
  return (
      <Badge variant={'solid'}
          colorScheme={color}
          fontSize={'14px'}
          paddingX={'2'}
          borderRadius={'5px'}
      >{score}</Badge>
  )
}

export default CriticScore