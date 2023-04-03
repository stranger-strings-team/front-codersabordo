import styled from "styled-components"

export const getColor = (key: number) => {
    if (key == 0) return "blue"
    else if (key == 1) return "pink"
    else if (key == 2) return "purple"
    else if (key == 3) return "yellow"
  }

  export const FeedbackDiv = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
  `