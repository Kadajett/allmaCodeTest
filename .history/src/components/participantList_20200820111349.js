import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "@material-ui/core/Avatar"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
    participantsContainer: {
        display: 'flow',
        flexDirection: 'row',

    }
}));

const participantList = ({participants = []}) => {
    const classes = useStyles();
    return (
        <div classes={classes.participantsContainer}>
            {participants.map((participant) => (
                <Tooltip arrow title={participant.realName}>
                    <Avatar alt={participant.realName} src={participant.avatarUrl} />
                </Tooltip>
            ))}
        </div>
        
    )
}

participantList.propTypes = {

}

export default participantList
