import React from 'react'
import './MainRewards.css'
import Toogle from '../Toogle/Toogle'
import Extras from '../Extras/Extras'
import Provider from '../Provider/Provider'
import RewardsNavbar from '../RewardsNavbar/RewardsNavbar'
import Landing from '../Landing/Landing'
import AccountCreatingSteps from '../AccountCreatingSteps/AccountCreatingSteps'

const MainRewards = () => {
    return (
        <div className='rewards'>
            <RewardsNavbar/>
            <Landing/>
            <AccountCreatingSteps/>
            <Toogle />
            <Extras />
            <Provider />
        </div>
    )
}

export default MainRewards