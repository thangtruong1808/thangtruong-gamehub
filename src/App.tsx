import reactLogo from './assets/react.svg'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <Grid templateAreas={
      {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }
    }>
      <GridItem area={"nav"}>
          <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} bgColor={"blue"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bgColor={"grey"}>
          Main
      </GridItem>

    </Grid>
  )
}

export default App
