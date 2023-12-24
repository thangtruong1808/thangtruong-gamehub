import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageURL from '../services/image-url'

interface Props {
    game: Game
}
const GameCard = ({game}: Props) => {
  return (
      <Card width={"300px"} borderRadius={'10px'} overflow={'hidden'}>
      <Image src={getCroppedImageURL(game.background_image)} />    
      {/* <Image src={game.background_image} /> */}
          <CardBody>
            <Heading fontSize={'lg'}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
              <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>        
          </CardBody>
    </Card>
  )
}

export default GameCard