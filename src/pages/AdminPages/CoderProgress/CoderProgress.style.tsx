import styled from 'styled-components'
import { Padmin, ProfileAdminDiv } from '../ProfilesAdmin/ProfilesAdminStyle'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Table = styled.div`
    margin: 20px;
    font-size: 0.8rem;
    border-collapse: collapse;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
`

export const ThHeader = styled.p`
    font-size: 1rem;
    padding: 10px;
`

export const StyledProfileAdminDiv = styled(ProfileAdminDiv)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const StyledPadmin = styled(Padmin)`
    margin: 0 1rem 0 1rem;
    width: 130px;
    text-align: left;
`
export const StyledPadminAnswer = styled(StyledPadmin)`
    padding: 0 0 0 0;
    width: 90px;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    margin-bottom: -1rem;
`

export const P = styled.p`
    margin: 1rem 0 0 0;
    font-size: 2rem;
`

export const Button = styled.button`
    background: none;
    padding: 0;
    margin: 0 1rem 0 0;
    border: 0;
    height: 24px;
`

export const Img = styled.img`
    height: 24px;
`