import {Button, ButtonGroup, Container, Typography } from "@mui/material"
import agent from "../../app/api/agent";

export default function AboutPage(){
    return(
        <Container>
            <Typography gutterBottom  variant='h2' >
                Errors for testing 
            </Typography>
            <ButtonGroup  variant="contained" fullWidth>
                <Button onClick={() => agent.testErrors.get400Error().catch(error => console.log(error))}>Error 400</Button>
                <Button onClick={() => agent.testErrors.get401Error().catch(error => console.log(error))}>Error 401</Button>
                <Button onClick={() => agent.testErrors.get404Error().catch(error => console.log(error))}>Error 404</Button>
                <Button onClick={() => agent.testErrors.get500Error().catch(error => console.log(error))}>Error 500</Button>
                <Button onClick={() => agent.testErrors.getValidationError().catch(error => console.log(error))}>Error Validation</Button>

            </ButtonGroup>

        </Container>

    );
}