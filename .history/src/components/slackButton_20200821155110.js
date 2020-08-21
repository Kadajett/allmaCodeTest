import React from "react"
import PropTypes from "prop-types"
import ForumIcon from '@material-ui/icons/Forum';

const SlackButton = ({ channelName, channelID }) => {
  return (
    <>
      {channelID && (
        <Button variant="contained" color="primary" href="#contained-buttons">
        <ForumIcon /> Channel
        </Button>
      )}
    </>
  )
}

SlackButton.propTypes = {}

export {SlackButton};
