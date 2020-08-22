import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Fuse from "fuse.js";
import { useDebouncedCallback } from "use-debounce";
const ListControls = ({
	handleStatusIdSelection,
	handleSummarySearch,
	incidents,
}) => {
	const options = {
		isCaseSensitive: false,
		// includeScore: false,
		// shouldSort: true,
		// includeMatches: false,
		// findAllMatches: true,
		// minMatchCharLength: 1,
		// location: 0,
		// threshold: 0.6,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreLocation: false,
		// ignoreFieldNorm: false,
		keys: ["summary", "name"],
	};
	const fuse = new Fuse(incidents, options);

	const [onSearchChangeHandler] = useDebouncedCallback(
		// function
		e => {
			const searchValue = e || "";
			handleSummarySearch(
				fuse.search(searchValue).map(item => item?.item),
				searchValue.length === 0,
			);
		},
		// delay in ms
		500,
	);

	return (
		<section>
			<Autocomplete
				id="combo-box-demo"
				options={incidents}
				getOptionLabel={option => option.title}
				style={{ width: 300 }}
				renderInput={params => (
					<TextField {...params} label="Combo box" variant="outlined" />
				)}
			/>
			<form noValidate autoComplete="off">
				<TextField
					id="standard-basic"
					label="Standard"
					onChange={e => {
						onSearchChangeHandler(e.target.value);
					}}
				/>
			</form>
		</section>
	);
};

ListControls.propTypes = {};

export default ListControls;
