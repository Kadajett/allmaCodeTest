import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IncidentList } from "../components/incidentsList"
import { getIncidents } from "../utils/services"
import { ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
const theme = createMuiTheme({
  palette: {
    primary: { 500: "#467fcf" },
  },
})
const IndexPage = ({
  data: {
    dataJson: { incidents },
  },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
