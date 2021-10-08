import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Detail({ toDo }) {
	return (
		<Container>
			<h1>{toDo?.text}</h1>
			<h5>Created at:{toDo?.id}</h5>
		</Container>
	);
}

function mapStateToProps(state, ownProps) {
	const {
		match: {
			params: { id },
		},
	} = ownProps;
	return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}
const Container = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: "Roboto", sans-serif;
	color: seagreen;
`;

export default connect(mapStateToProps)(Detail);
