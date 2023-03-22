const PostTextInput = () => {
	return(
		<input 
			type="text"
			name="questionanswer1"
			placeholder="Escribe una respuesta"
			autoComplete="off"
			onChange={handleInput}
			required
		/>
	)
}
export default PostTextInput
