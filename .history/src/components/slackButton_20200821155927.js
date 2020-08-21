import React from "react"
import PropTypes from "prop-types"
import ForumIcon from "@material-ui/icons/Forum"
import Button from '@material-ui/core/Button';

const SlackButton = ({ channelName, channelId }) => {
    const getSlackLink = (channelid) => {
        return `https://slack.com/app_redirect?channel=${channelId}`
    }
  return (
    <>
      {channelId && (
        <Button variant="contained" color="primary" href={getSlackLink(channelId)}>
          <ForumIcon />{' '}Channel
        </Button>
      )}
    </>
  )
}

SlackButton.propTypes = {}

export { SlackButton }
