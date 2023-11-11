import React, { useContext } from 'react'
import './Header.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Appstate } from "../../App"
import { Link } from 'react-router-dom';

const Header = () => {
    const useAppState = useContext(Appstate)
    return (
        <div className='sticky top-0 z-10 headerbg header1 text-4xl font-bold p-4 border-b-4 border-grey flex justify-between items-center'>
            <Link to={'/'}><span>Night<span className='heading'>Trailer</span></span></Link>
            {useAppState.Login ?
                <Link to={'/addmovie'}><Button><span className='heading p-2 text-xl headbtnbg font-bold rounded flex items-center'>Add New<AddIcon className='ml-1' /></span></Button> </Link>
                :
                <Link to={'/login'}><Button><span className='heading headbtnbg p-2 font-bold rounded text-xl flex items-center'><LoginIcon className='mr-1'/>Login</span></Button></Link>

            }
        </div>
    )
}

export default Header