import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const Load = () => {
    return(
        <Dimmer active>
            <Loader size='big'>Loading</Loader>
        </Dimmer>
    )
}

export default Load