import React from "react"
import PropTypes from "prop-types"
import ForumIcon from "@material-ui/icons/Forum"
import Button from '@material-ui/core/Button';

const SlackButton = ({ channelName, channelId }) => {
  return (
    <>
      {channelId && (
        <Button variant="contained" color="primary" href="#contained-buttons">
          <ForumIcon /> Channel
        </Button>
      )}
    </>
  )
}

SlackButton.propTypes = {}

export { SlackButton }
