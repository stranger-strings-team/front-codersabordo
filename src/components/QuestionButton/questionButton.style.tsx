import styled from 'styled-components'
import { theme } from '../../Global.style';

// const handleColorType = (color: any) => {
//   switch (color) {
//     case "purple":
//       return theme.purpleBackground;
//     case "blue":
//       return theme.blueBackground;
//     case "pink":
//       return theme.pinkBackground;
//     case "yellow":
//     return theme.yellowBackground;
//   }
// };

// export const QuestionButtonStyled=styled.button`
//   background-color: ${({ color }) => handleColorType(color)};

// `;

export const colors = [
    "background-color: ${theme.purpleBackground}",
    "background-color: ${theme.pinkBackground}",
    "background-color: ${theme.yellowBackground}",
    "background-color: ${theme.purpleBackground}",
]

export const QuestionButton = styled.button`
    margin: 0 1em 1em 1em;
    font-size: 1.2em;
    color: ${theme.darkText}; 
    line-height: 1.3;
    font-weight: 400;
`

export const PurpleButton=styled(QuestionButton)`
    background-color: ${theme.purpleBackground};
`

export const BlueButton=styled(QuestionButton)`
    background-color: ${theme.blueBackground};
`

export const PinkButton=styled(QuestionButton)`
    background-color: ${theme.pinkBackground};
`

export const YellowButton=styled(QuestionButton)`
    background-color: ${theme.yellowBackground};
`

