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
import { makeStyles } from "@material-ui/core/styles"
import { Incident } from "./incident"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  table: {
    fontSize: "14px",
    '& th': {
      '&:first-child': {
        paddingLeft: "15px",
      },
      '&:last-child': {
        paddingRight: '15px',
      }
    },
    '& td': {
      '&:last-child': {
        paddingRight: '15px',
      }
    }
  },
})
function IncidentList({ incidents }) {
  const classes = useStyles()
  return (
    <TableContainer width={1} component={Paper}>
      <Table
        width={1}
        stickyHeader
        className={classes.table}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">severity</TableCell>
            <TableCell align="right">Commander</TableCell>
            <TableCell align="right">Participants</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">duration</TableCell>
            <TableCell align="right">Created Date</TableCell>
            <TableCell align="right">Slack Channel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map(incident => (
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
