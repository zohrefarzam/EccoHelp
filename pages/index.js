import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import BannerSection from './layouts/sections/modern-sass/banner'
import FeatureSection from './layouts/sections/modern-sass/feature'
import BuildSection from './layouts/sections/modern-sass/build'
import WorkSection from './layouts/sections/modern-sass/work'
import PriceSection from './layouts/sections/modern-sass/price'
import TestimonialSection from './layouts/sections/modern-sass/testimonial'
import SubscribeSection from './layouts/sections/modern-sass/subscribe'
import FaqSection from './layouts/sections/modern-sass/faq'
import ClientSection from './layouts/sections/modern-sass/client'
import FooterSection from './layouts/sections/modern-sass/footer'
import Header from '../containers/common/header'
import Copyright from './layouts/sections/modern-sass/copyright'
import RequirementFormContextProvider from '../containers/eccoHelpForm/RequirementFormContext'

const ModernSass = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#5738F0')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#071828')
        document.body.style.setProperty('--dark', '#5738F0')
    })

    return (
        <RequirementFormContextProvider>
        <div>
            <Head>
                <title>Ecco Help </title>
            </Head>

            <Header className="saas1"  />

            <BannerSection />

            <FeatureSection />

            <BuildSection />

            {/* <WorkSection />

            <PriceSection />

            <TestimonialSection />

            <SubscribeSection />

            <FaqSection />

            <ClientSection />

            <FooterSection />

            <Copyright /> */}
        </div>
        </RequirementFormContextProvider>
    )
}

export default ModernSass;