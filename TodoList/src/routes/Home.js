import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";
import styled from "styled-components";

function Home({ toDos, addToDo }) {
	const [text, setText] = useState("");
	function onChange(e) {
		setText(e.target.value);
	}
	function onSubmit(e) {
		e.preventDefault();
		addToDo(text);
		setText("");
	}
	return (
		<Container>
			<Title>To Do List</Title>
			<Form onSubmit={onSubmit}>
				<Input
					type="text"
					value={text}
					onChange={onChange}
					placeholder="type your todo"
				/>
				<Button>ADD</Button>
			</Form>
			<Ul>
				{toDos.map((toDo) => (
					<ToDo {...toDo} key={toDo.id} />
				))}
			</Ul>
		</Container>
	);
}

function mapStateToProps(state) {
	return { toDos: state };
}
function mapDispatchToProps(dispatch) {
	return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	border-radius: 10px;
	box-shadow: 1px 2px 3px 1px rgba(34, 36, 38, 0.3);
	font-family: "Roboto", sans-serif;
`;
const Title = styled.h1`
	color: seagreen;
`;
const Form = styled.form`
	display: flex;
	justify-content: space-evenly;
	width: 40%;
`;
const Input = styled.input`
	width: 11rem;
	height: 1.4rem;
	padding: 2px;
	:focus {
		outline: none;
	}
`;
const Ul = styled.ul`
	width: 80%;
	list-style: none;
	line-height: 2rem;
`;
const Button = styled.button`
	background-color: seagreen;
	border: none;
	outline: none;
`;
