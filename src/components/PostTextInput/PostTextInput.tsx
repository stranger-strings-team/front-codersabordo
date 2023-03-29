const PostTextInput = ({ onChange }: any) => {
	return(
	<div className="inputboxstyle">
		<label htmlFor="text"></label>
		<input 
			type="text"
			name="text"
			placeholder="Escribe una respuesta"
			autoComplete="off"
			onChange={onChange}
			required
		/>
		<div>
			<input
				type="checkbox"
				name="isCorrect"
				value="isCorrect"
			/>
			<label htmlFor="isCorrect">
				¿Es correcta?
			</label>
		</div>
	</div>
	)
}
export default PostTextInput
