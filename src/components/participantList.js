import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const useStyles = makeStyles(theme => {
	return {
		participantsContainer: {
			display: "flex",
			flexDirection: "row-reverse",
		},
		participantAvatar: {
			"& $img": {
				marginBottom: "0px",
			},
		},
		avatarNoCommander: {
			fontSize: "1rem",
		},
		avatarDeclaredNoCommander: {
			fontSize: "1rem",
			color: "#fff",
			backgroundColor: theme.palette.secondary.main,
		},
	};
});

const ParticipantList = ({
	participants = [],
	primary = false,
	incidentStatusId = "",
}) => {
	const classes = useStyles();
	const imageIsEmpty = !participants[0]?.user?.avatarUrl;
	const showPrimaryEmpty = imageIsEmpty && primary;
	return (
		<div className={classes.participantsContainer}>
			{showPrimaryEmpty && (
				<Tooltip arrow title="Assign A Commander">
					<Avatar
						className={
							incidentStatusId === "DECLARED"
								? classes.avatarDeclaredNoCommander
								: classes.avatarNoCommander
						}
					>
						<HelpOutlineIcon />
					</Avatar>
				</Tooltip>
			)}
			{!showPrimaryEmpty && (
				<AvatarGroup max={4}>
					{participants.length > 0 &&
						participants.map(participant => (
							<Tooltip arrow title={participant?.user?.realName}>
								<Avatar
									className={classes.participantAvatar}
									alt={participant?.user?.realName}
									src={participant?.user?.avatarUrl}
								/>
							</Tooltip>
						))}
				</AvatarGroup>
			)}
		</div>
	);
};

ParticipantList.propTypes = {};

export { ParticipantList };
