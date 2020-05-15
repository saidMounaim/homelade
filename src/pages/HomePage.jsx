import React from 'react';
import HeroSearch from '../components/HeroSearch';
import OurServices from '../components/OurServices';
import BestProperties from '../components/BestProperties';

const HomePage = () => {

    return (
        <React.Fragment>
            <HeroSearch />
            <OurServices />
            <BestProperties />
        </React.Fragment>
    )
}

export default HomePage
