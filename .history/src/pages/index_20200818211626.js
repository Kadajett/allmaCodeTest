import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {IncidentList} from '../components/incidentsList'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IncidentList />
  </Layout>
)

export default IndexPage
