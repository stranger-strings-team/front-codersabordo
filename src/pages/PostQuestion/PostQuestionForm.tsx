import { useEffect, useState } from 'react'
import { RecipeType } from "../Onboarding/Onboarding"
import "./style.css"

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
					<input 
						type="text"
						name="questionanswer1"
						placeholder="Escribe una respuesta"
						autoComplete="off"
						onChange={handleInput}
						required
					/>
					<input 
						type="text"
						name="questionanswer1"
						placeholder="Escribe una respuesta"
						autoComplete="off"
						onChange={handleInput}
						required
					/>
					<input 
						type="text"
						name="questionanswer1"
						placeholder="Escribe una respuesta"
						autoComplete="off"
						onChange={handleInput}
						required
					/>
					<input 
						type="text"
						name="questionanswer1"
						placeholder="Escribe una respuesta"
						autoComplete="off"
						onChange={handleInput}
						required
					/>
				</label>
				<label>
					Feedback
					<input 
						type="text"
						name="questionquestion"
						placeholder="¿Qué quieres que vea el usuario cuando responda correctamente?"
						autoComplete="off"
						onChange={handleInput}
						required
					/>
				</label>
			</form>
		</div>
  )
}

export default PostQuestionForm
