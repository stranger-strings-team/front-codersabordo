import styled from 'styled-components'
import { theme } from '../../Global.style'
import { Padmin, ProfileAdminDiv } from '../../pages/ProfilesAdmin/ProfilesAdminStyle'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Table = styled.table`
    margin: 20px;
    font-size: 0.8rem;
    border-collapse: collapse;
`

export const ThHeader = styled.th`
    padding: 10px;
`

export const StyledProfileAdminDiv = styled(ProfileAdminDiv)`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    width: 90%;
`

export const StyledPadmin = styled(Padmin)`
    justify-content: left;
`