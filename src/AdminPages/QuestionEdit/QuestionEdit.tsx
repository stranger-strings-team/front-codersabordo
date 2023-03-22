import React from 'react'
import { Input } from '../../pages/RegisterPage/Register.styled'

type Props = {}

const QuestionEdit = (props: Props) => {
  return (
    <div>
        <div>
            <p>
                Para que el bootcamp funcione correctamente, ¿qué compromisos tendrías que cumplir?
            </p>
        </div>
        <div>
            <h3>Respuestas</h3>
            <div>
            <Input type='text' placeholder='Respeto' />
            <label>
            <Input type='checkbox'/>
            ¿Es correcto?
            </label>
            </div>
        </div>
            <h3>Feedback respuesta correcta</h3>
        <div>
            <input value='
Queremos generar comportamientos coherentes con los valores y la misión de Factoría F5, creando un entorno seguro, protector y generador de espacios de crecimiento y transformación para todas las personas. 
Para que el bootcamp funcione correctamente, la puntualidad y la asistencia son esenciales. Si no eres puntual te perderás información importante, conceptos teóricos, ejercicios, proyectos con las compañeras, etc.
Recuerda también que la programación se aprende practicando. Cuanto más practiques, mejor asentarás los conocimientos.
El bootcamp será duro, pero hay que intentar divertirse y hacer que aprender sea agradable para todas'/>
        </div>
            <h3>Feedback respuesta incorrecta</h3>
        <div>
            <input value='¡OOPS! Intentalo de nuevo'/>
        </div>
    </div>
  )
}

export default QuestionEdit