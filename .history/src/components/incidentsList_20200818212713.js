/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getIncidents } from "../utils/services"

function IncidentList() {
  const {
    dataJson: { incidents },
  } = useStaticQuery(getIncidents())

  return (
    <>
        {incidents && <span>Incidents loaded</span>}
    </>
  )
}

IncidentList.defaultProps = {

}

IncidentList.propTypes = {

}

export {IncidentList}
