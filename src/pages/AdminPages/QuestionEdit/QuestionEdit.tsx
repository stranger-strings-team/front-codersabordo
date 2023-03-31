import React from 'react'
import PostTextInput from '../../../components/PostTextInput/PostTextInput'
import { InputValue, QuesionDiv } from './QuestionEdit.style'
import '../../AdminPages/PostQuestion/style.css'

type Props = {}

const QuestionEdit = (props: Props) => {
  return (
    <div className='postquestionform'>
		<QuesionDiv>
            <h5>Para que el bootcamp funcione correctamente, ¿qué compromisos tendrías que cumplir?</h5>
        </QuesionDiv>
		<form>
			<label>
					Respuestas
				<PostTextInput />
				<PostTextInput />
				<PostTextInput />
				<PostTextInput />
			</label>
			<label className="feedback">
				Feedback pregunta correcta
                <InputValue value='Queremos generar comportamientos coherentes con los valores y la misión de Factoría F5, creando un entorno seguro, protector y generador de espacios de crecimiento y transformación para todas las personas. Para que el bootcamp funcione correctamente, la puntualidad y la asistencia son esenciales. Si no eres puntual te perderás información importante, conceptos teóricos, ejercicios, proyectos con las compañeras, etc.Recuerda también que la programación se aprende practicando. Cuanto más practiques, mejor asentarás los conocimientos. El bootcamp será duro, pero hay que intentar divertirse y hacer que aprender sea agradable para todas'/>
			</label>
            <label>
                Feedback respuesta incorrecta
                <input placeholder='¡OOPS! Intentalo de nuevo'/>
            </label>
		</form>
	</div>
  )
}

export default QuestionEdit