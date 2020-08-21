import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IncidentList } from "../components/incidentsList"
import { getIncidents } from "../utils/services"
const IndexPage = ({
  data: {
    dataJson: { incidents },
  },
}) => {
  useEffect(() => {
    console.log("jerb: ", incidents)
  }, [incidents])
  return (
    <Layout>
      <SEO title="Home" />
      <IncidentList incidents={incidents} />
    </Layout>
  )
}
export const query = graphql`
query incidentsQuery {
  dataJson {
    incidents {
      id
      severity {
        name
      }
      channelId
      participants {
        user {
          realName
          avatarUrl
          id
        }
        role {
          name
          id
        }
      }
      workspace {
        teamId
      }
      createdOn
      duration
      incidentStatusId
      channelPrivate
      channelName
    }
  }
}

`
export default IndexPage
