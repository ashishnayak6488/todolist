import React from 'react'

import { TABS } from '../redux/actions/types'
import { useDispatch } from 'react-redux'
import { toggleTabs } from '../redux/actions/index.js'

const Tabs = (currentTab) => {

    const dispatch = useDispatch();



    return (

        TABS.map(tab => (
            <button onClick={() => dispatch(toggleTabs(tab))} className = {tab === currentTab ? 'button selected' : 'button'}>
                {tab}
            </button>
        ))


    )
}

export default Tabs