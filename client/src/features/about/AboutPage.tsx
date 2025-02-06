import {Button, ButtonGroup, Container, Typography, Alert, ListItem, AlertTitle } from "@mui/material"
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage(){

    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError(){
        agent.testErrors.getValidationError()
        .catch(error => setValidationErrors(error))
    }

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
                <Button onClick={getValidationError}>Error Validation</Button>

            </ButtonGroup>

            {validationErrors.length > 0 &&

                <Alert severity="error">
                    <AlertTitle>
                    Error List
                    </AlertTitle>
                    {validationErrors.map(error=>(                       
                        <ListItem key={error}>
                            {error}
                        </ListItem>
                        )
                    )}
                </Alert>
            
            }
        </Container>

    );
}