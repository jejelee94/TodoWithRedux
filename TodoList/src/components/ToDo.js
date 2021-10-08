import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ToDo({ text, onBtnClick, id }) {
	return (
		<>
			<Li>
				<StyledLink to={`/${id}`}>{text}</StyledLink>
				<Button onClick={onBtnClick}>DEL</Button>
			</Li>
		</>
	);
}
function mapDispatchToProps(dispatch, ownProps) {
	return { onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
}
export default connect(null, mapDispatchToProps)(ToDo);

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
const Li = styled.li`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid seagreen;
	padding: 1em;
	font-family: "Roboto", sans-serif;
	color: seagreen;
`;
const Button = styled.button`
	background-color: seagreen;
	border: none;
	outline: none;
`;
