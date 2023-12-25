import React, { useEffect, useState } from 'react'
import {CanceledError} from "axios"
import apiClient from '../services/api-client'
import useData from './useData'
import { Genre } from './useGenres'
import { GameQuery } from '../App'


export interface Platform{
    id: number,
    name: string,
    slug: string
}
export interface Game{
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
}

const useGames = (
    // selectedGenre: Genre | null, selectedPlatform: Platform | null)
    (gameQuery: GameQuery)    =>
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platform: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
        }},
        // [gameQuery.genre?.id, gameQuery.platform?.id])
        [gameQuery])
)

export default useGames;