// imported components
import { Grid } from '@mui/material'
import GenerateOptions from '../generateOptions/'
import ListOptions from '../listOptions/'
import EvaluateOptions from '../evaluateOptions'

// imported services
import { Routes, Route } from 'react-router-dom'

// imported assets
import Home from '../home'

export default function MainRoutes() {
    return (
        <Grid container direction='row' className='backgroundGrey' minHeight="100vh">
            
            <ListOptions></ListOptions>

            <Grid container item flex={1} p={8} justifyContent={'center'}>

                <Routes>
                    <Route path='/' element={<Home></Home>}/>
                    <Route path='/generateoptions' element={<GenerateOptions />} />
                    <Route path='/evaluateoptions' element={<EvaluateOptions />} />
                </Routes>
            </Grid>
        </Grid>
    )
}
