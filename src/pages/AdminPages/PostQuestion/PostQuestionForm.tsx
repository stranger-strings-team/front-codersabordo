import { FormEvent, useEffect, useState } from 'react'
import { postQuestion } from '../../../services/questionServices'
import "./style.css"

const PostQuestionForm = () => {

	const [questionText, setQuestionText] = useState<string>("ELIGE UNA")

	const [section, setSection] = useState<string>("")

	const [feedback, setFeedback] = useState<string>("muy bien")

	const [answerText0, setAnswerText0] = useState<string>("incorrecta")

	const [answerText1, setAnswerText1] = useState("incorrecta")

	const [answerText2, setAnswerText2] = useState("incorrecta")

	const [answerText3, setAnswerText3] = useState("incorrecta")

	const [answerCheck0, setAnswerCheck0] = useState<boolean>(false)

	const [answerCheck1, setAnswerCheck1] = useState(false)

	const [answerCheck2, setAnswerCheck2] = useState(false)

	const [answerCheck3, setAnswerCheck3] = useState(false)


	const [question, setQuestion] = useState({
		question: "",
		answer: [{
			text: "",
			isCorrect: false
		}],
		type: "Opción múltiple",
		section: "",
		feedbackCorrect: "",
		feedbackIncorrect: "¡Vuelve a intentarlo!"
	})

	const handleInput = () => {
		setQuestion({
			question: questionText,
			answer: [
				{
					text: answerText0,
					isCorrect: answerCheck0
				},
				{
					text: answerText1,
					isCorrect: answerCheck1
				},
				{
					text: answerText2,
					isCorrect: answerCheck2
				},
				{
					text: answerText3,
					isCorrect: answerCheck3
				}
			],
			type: "Opción múltiple",
			section: section,
			feedbackCorrect: feedback,
			feedbackIncorrect: "¡Vuelve a intentarlo!"
		})
	}
	useEffect(() => {
		handleInput()
	}, [])
	
	// HAY QUE PULSAR DOS VECES EL BOTON

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		handleInput()
		
		postQuestion(question)
			.catch()
			.then((response) => {
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='postquestionform'>
			<h3>Pregunta</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="question">Pregunta</label>
					<input 
						type="text"
						name="question"
						aria-label='question'
						placeholder="Escribe una pregunta"
						onChange={(e) => setQuestionText(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='section'>¿A qué sección pertenece?</label>
					<input placeholder="Sección" name="section" list="section" onChange={(e) => setSection(e.target.value)} required/>
					<datalist id="section">
						<option value="Sección 1 - Compromisos">Sección 1</option>
						<option value="Sección 2 - ¿Qué puedes esperarte del bootcamp?">Sección 2</option>
						<option value="Sección 3 - ¿Qué puedes esperarte al finalizar el bootcamp?">Sección 3</option>
					</datalist>
				</div>


				<div>
					<p>Respuestas</p>
					<div className="inputboxstyle">
						<label htmlFor="answertext0"></label>
						<textarea
							key={0}
							name="answertext0"
							placeholder="Escribe una respuesta"
							autoComplete="off"
							onChange={(e) => setAnswerText0(e.target.value)}
							required
						> 
						</textarea>
						<div className='iscorrectcheckbox'>
							<label htmlFor="isCorrect0">Correcta</label>
							<input
								key={0}
								type="checkbox"
								name="isCorrect0"
								value="isCorrect"
								className='checkboxinput'
								onChange={() => setAnswerCheck0(!answerCheck0)}
							/>
						</div>
					</div>

					<div className="inputboxstyle">
						<label htmlFor="answertext1"></label>
						<textarea
							key={1}
							name="answertext1"
							placeholder="Escribe una respuesta"
							autoComplete="off"
							onChange={(e) => setAnswerText1(e.target.value)}
							required
						> 
						</textarea>
						<div className='iscorrectcheckbox'>
							<label htmlFor="isCorrect1">Correcta</label>
							<input
								key={1}
								type="checkbox"
								name="isCorrect1"
								value="isCorrect"
								className='checkboxinput'
								onChange={() => setAnswerCheck1(!answerCheck1)}
							/>
						</div>
					</div>

					<div className="inputboxstyle">
						<label htmlFor="answertext2"></label>
						<textarea
							key={2}
							name="answertext2"
							placeholder="Escribe una respuesta"
							autoComplete="off"
							onChange={(e) => setAnswerText2(e.target.value)}
							required
						> 
						</textarea>
						<div className='iscorrectcheckbox'>
							<label htmlFor="isCorrect2">Correcta</label>
							<input
							key={2}
								type="checkbox"
								name="isCorrect2"
								value="isCorrect"
								className='checkboxinput'
								onChange={() => setAnswerCheck2(!answerCheck2)}
							/>
						</div>
					</div>

					<div className="inputboxstyle">
						<label htmlFor="answertext3"></label>
						<textarea
							key={3}
							name="answertext3"
							placeholder="Escribe una respuesta"
							autoComplete="off"
							onChange={(e) => setAnswerText3(e.target.value)}
							required
						> 
						</textarea>
						<div className='iscorrectcheckbox'>
							<label htmlFor="isCorrect3">Correcta</label>
							<input
							key={3}
								type="checkbox"
								name="isCorrect3"
								value="isCorrect"
								className='checkboxinput'
								onChange={() => setAnswerCheck3(!answerCheck3)}
							/>
						</div>
					</div>
				</div>


				<div className="feedback">
					<label>Feedback</label>
					<textarea 
						name="feedbackCorrect"
						onChange={(e) => setFeedback(e.target.value)}
						placeholder="¿Qué quieres que vea el usuario cuando responda correctamente?"
						autoComplete="off"
						required>
					</textarea>
				</div>
				<button>CONFIRMAR</button>
			</form>
		</div>
  )
}

export default PostQuestionForm
