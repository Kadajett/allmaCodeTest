/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import List from "@material-ui/core/List"

import { Incident } from "./incident"
function IncidentList({ incidents }) {
  return (
    <List>
      {incidents && incidents.map(incident => <Incident incidentData={incident} />)}
    </List>
  )
}

IncidentList.defaultProps = {}

IncidentList.propTypes = {}

export { IncidentList }
