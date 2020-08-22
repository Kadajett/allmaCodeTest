import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Badge } from "@material-ui/core/Badge";
import { MailIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { SevName } from "./sevName";
import Divider from "@material-ui/core/Divider";
import { ParticipantList } from "./participantList";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { secondsToDhms } from "../utils/time";
import moment from "moment";
import { SlackButton } from "./slackButton";
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: "36ch",
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: "inline",
	},
	issueContainer: {
		display: "flex",
		marginBottom: "10px",
		border: "1px solid gray",
	},
	primaryAvatarContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "5px",
	},
	avatar: {
		alignItems: "end",
	},
	issueBodyNoAvatar: {
		display: "flex",
		flexDirection: "column",
	},
	issueBodyWithAvatar: {
		display: "flex",
		flexDirection: "column",
		paddingLeft: "10px",
	},
	greenChip: {
		color: "green",
		border: "1px solid green",
	},
}));

const getPrimaryParticipant = participants => {
	return [participants.find(participant => participant?.role?.id === 1)];
};

// removes duplicates and filters out the commander
const getNonPrimaryParticipants = participants => {
	const set = new Set(participants);
	const pArray = [...set];
	return pArray.filter(participant => participant?.role?.id !== 1);
};

const getLocalDateTime = dt => {
	let localDT = moment(dt).local().format("MMMM Do YYYY, h:mm:ss a");
	return localDT;
};

const createRowData = ({
	name = `Incident`,
	severity = "N/A",
	participants = [],
	incidentStatusId = "N/A",
	duration = 0,
	createdOn = 0,
	channelId = "",
	channelName = "",
	workspace = {},
	...otherProps
}) => ({
	name,
	severity,
	// this is ugly. fix it
	primaryParticipant: ParticipantList({
		participants: getPrimaryParticipant(participants),
		primary: true,
		incidentStatusId,
	}),
	participants: ParticipantList({
		participants: getNonPrimaryParticipants(participants),
	}),
	incidentStatusId,
	duration: secondsToDhms(duration),
	createdOn: getLocalDateTime(createdOn),
	chatChannel: SlackButton({
		channelId,
		channelName,
		teamId: workspace?.teamId,
	}),
	otherProps,
});

const Incident = ({ incidentData }) => {
	const classes = useStyles();

	const getStatusChip = statusId => {
		return statusId === "RESOLVED" ? (
			<Chip
				icon={<CheckIcon />}
				label="Resolved"
				color="primary"
				className={classes.greenChip}
				variant="outlined"
			/>
		) : (
			<Chip
				icon={<ErrorOutlineIcon />}
				label="Declared"
				color="secondary"
				variant="outlined"
			/>
		);
	};

	const rowData = createRowData(incidentData);
	return (
		<TableRow key={rowData.name}>
			<TableCell component="th" scope="row">
				{rowData.name}
			</TableCell>
			<TableCell align="right">{rowData.severity?.name || "N/A"}</TableCell>
			<TableCell align="right">{rowData.primaryParticipant}</TableCell>
			<TableCell align="right">{rowData.participants}</TableCell>
			<TableCell align="right">
				{getStatusChip(rowData.incidentStatusId)}
			</TableCell>
			<TableCell align="right">{rowData.duration}</TableCell>
			<TableCell align="right">{rowData.createdOn}</TableCell>
			<TableCell align="right">{rowData.chatChannel}</TableCell>
		</TableRow>
	);
};

Incident.propTypes = {};

export { Incident };
