import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IncidentList } from "../components/incidentsList"
import {getIncidents} from '../utils/services';
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <IncidentList incidents={data} />
  </Layout>
)
export const query = getIncidents();
export default IndexPage
