import { FormEvent, useEffect, useState } from 'react'
import "../../AdminPages/PostQuestion/style.css"
import { postQuestion } from '../../../services/questionServices'

const PostQuestionForm = () => {

	const [answers, setAnswers] = useState([{
		"text": "",
		"isCorrect": false
	}])

	const [question, setQuestion] = useState({
		"question": "",
		"answer": answers,
		"type": "Opción múltiple",
		"section": "",
		"feedbackCorrect": "",
		"feedbackIncorrect": "¡Vuelve a intentarlo!"
	})

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		
		postQuestion(question)
			.catch()
			.then((response) => {
			})
			.catch(err => console.log(err))
	}

	const handleInput = (e: { target: { name: any; value: any } }) => {
		setQuestion({ ...question, [e.target.name]: e.target.value })
		setAnswers({...answers})
	}

	return (
		<div className='postquestionform'>
			<h3>Pregunta</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="question"> Pregunta </label>
					<input 
						type="text"
						name="question"
						aria-label='question'
						placeholder="Escribe una pregunta"
						onChange={handleInput}
						required
						/>
				</div>
				<div>
					<label htmlFor='section'>¿A qué sección pertenece?</label>
					<select placeholder="Sección" name="section" onChange={handleInput} required>
						<option value="Sección 1 - Compromisos">Sección 1</option>
						<option value="Sección 2 - ¿Qué puedes esperarte del bootcamp?">Sección 2</option>
						<option value="Sección 3 - ¿Qué puedes esperarte al finalizar el bootcamp?">Sección 3</option>
					</select>
				</div>
				<div>
					<p>Respuestas</p>
					<div className="inputboxstyle">
						<label htmlFor="answer.answer"></label>
						<textarea
							name="answer.answer"
							placeholder="Escribe una respuesta"
							autoComplete="off"
							onChange={() => setAnswers([])}
							required
						> 
						</textarea>
						<div className='iscorrectcheckbox'>
							<label htmlFor="answer.isCorrect">Correcta</label>
							<input
								type="checkbox"
								name="answer.isCorrect"
								value="answer.isCorrect"
								className='checkboxinput'
							/>
						</div>
					</div>
				</div>
				<div className="feedback">
					<label>Feedback</label>
					<textarea 
						name="feedbackCorrect"
						onChange={handleInput}
						placeholder="¿Qué quieres que vea el usuario cuando responda correctamente?"
						autoComplete="off"
						required>
					</textarea>
				</div>
				<button>ACTUALIZAR</button>
			</form>
		</div>
  )
}

export default PostQuestionForm
