import { Button } from '@material-ui/core';
import { React } from 'react'
import { useNavigate } from 'react-router-dom'
function Oder() {
    const navigaate = useNavigate();
    return (
        <div className='oder'>
            <h2>thank you for your oder.</h2>

            <Button onClick={() => { navigaate("/menu") }}>cheout more products</Button>

        </div>

    );
}

export default Oder