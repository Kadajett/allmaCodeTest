import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IncidentList } from "../components/incidentsList"
import { getIncidents } from "../utils/services"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import baseTheme from "material-ui/styles/baseThemes/darkBaseTheme"
import * as Colors from "material-ui/styles/colors"
import { fade } from "material-ui/utils/colorManipulator"
import { ThemeProvider } from "@material-ui/core/styles"

const getTheme = () => {
  let overwrites = {}
  return getMuiTheme(baseTheme, overwrites)
}
const IndexPage = ({
  data: {
    dataJson: { incidents },
  },
}) => {
  useEffect(() => {
    console.log("jerb: ", incidents)
  }, [incidents])
  return (
    <ThemeProvider theme={getTheme()}>
      <Layout>
        <SEO title="Home" />
        <IncidentList incidents={incidents} />
      </Layout>
    </ThemeProvider>
  )
}
export const query = graphql`
  query incidentsQuery {
    dataJson {
      incidents {
        id
        severity {
          name
          id
          description
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
        name
      }
    }
  }
`
export default IndexPage
