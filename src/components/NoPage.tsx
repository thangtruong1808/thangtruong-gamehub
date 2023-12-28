import { useRouteError } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const NoPage = () => {
  const error: any = useRouteError();
  return (
    <>
      <Text fontSize={"30px"} fontWeight={"bold"} margin={5}>
        Sorry, NoPage
      </Text>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default NoPage;
