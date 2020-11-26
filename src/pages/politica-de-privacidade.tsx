import React from 'react'
import { GetStaticProps } from 'next'

import getPrivacyPolicy from '../data/privacyPolicy'

import Layout from '../components/Layout'

import { SectionIntro, SectionContent } from '../styles/pages/privacyPolicy'

export const getStaticProps: GetStaticProps = async () => {
  const privacyPolicy = await getPrivacyPolicy()

  return {
    props: {
      privacyPolicy
    },
    revalidate: 120
  }
}
interface PrivacyPolicyProps {
  privacyPolicy: string
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ privacyPolicy }) => {
  return (
    <Layout title="Política de Privacidade">
      <SectionIntro>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-info">
              <h1>Política de Privacidade</h1>
            </div>
            <div className="col-12 col-sm-6 col-figure">
              <img
                src="/assets/person-3.svg"
                alt=""
                className="img-fluid figure"
                width={850}
                height={597}
              />
            </div>
          </div>
        </div>
      </SectionIntro>
      <SectionContent>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
            </div>
          </div>
        </div>
      </SectionContent>
    </Layout>
  )
}

export default PrivacyPolicy
