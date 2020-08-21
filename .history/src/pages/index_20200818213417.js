import React, {useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IncidentList } from "../components/incidentsList"
import {getIncidents} from '../utils/services';
const IndexPage = ({data}) => {
  useEffect(() => {
    console.log('jerb: ', data);
  }, [data]);
  return (
    <Layout>
      <SEO title="Home" />
      <IncidentList incidents={data} />
    </Layout>
  )
}
export const query = getIncidents();
export default IndexPage
