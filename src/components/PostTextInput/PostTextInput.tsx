const PostTextInput = ({ onChange }: any) => {
	return(
	<div>
		<input 
			type="text"
			name="questionanswer1"
			placeholder="Escribe una respuesta"
			autoComplete="off"
			onChange={onChange}
			required
		/>
		<div>
			<input
				type="checkbox"
				name="iscorrect"
				value="iscorrect"
			/>
			<label name="iscorrect">
				¿Es correcta?
			</label>
		</div>
	</div>
	)
}
export default PostTextInput
