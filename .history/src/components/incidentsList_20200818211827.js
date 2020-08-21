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
  lang: `en`,
  meta: [],
  description: ``,
}

IncidentList.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export {IncidentList}
