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
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
function IncidentList({ incidents }) {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">severity</TableCell>
            <TableCell align="right">primary participant</TableCell>
            <TableCell align="right">participants</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">duration</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right">Slack Channel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident) => (
            <Incident incidentData={incident} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

IncidentList.defaultProps = {}

IncidentList.propTypes = {}

export { IncidentList }
