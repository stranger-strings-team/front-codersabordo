import { useEffect, useState } from 'react'
import { RecipeType } from "../Onboarding/Onboarding"
import "./style.css"
import PostTextInput from "../../components/PostTextInput/PostTextInput"

const PostQuestionForm = () => {

	const [question, setQuestion] = useState()

	const handleInput = () => {
		
	}

	return (
		<div className='postquestionform'>
			<h3>Pregunta</h3>
			<form>
				<label>
					Pregunta
					<input 
						type="text"
						name="questionquestion"
						placeholder="Escribe una pregunta"
						autoComplete="off"
						onChange={handleInput}
						required
					/>
				</label>
				<label>
					¿A qué sección pertenece?
					<select>
						<optgroup>
							<option>Sección 1</option>
							<option>Sección 2</option>
							<option>Sección 3</option>
						</optgroup>
					</select>
				</label>
				<label>
					Respuestas
					<PostTextInput />
					<PostTextInput />
					<PostTextInput />
					<PostTextInput />
				</label>
				<label className="feedback">
					Feedback
					<textarea 
						type="text"
						name="questionquestion"
						placeholder="¿Qué quieres que vea el usuario cuando responda correctamente?"
						autoComplete="off"
						onChange={handleInput}
						required>
					</textarea>
				</label>
			</form>
		</div>
  )
}

export default PostQuestionForm
