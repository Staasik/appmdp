import styled from 'styled-components'

interface QuestNumProps {
    index: number,
}

export const QuestNum = styled.div<QuestNumProps>`
    display:flex;
    flex-direction:column;
    width: 44%;
    gap:30px;    
    justify-content:flex-start;
    align-items:flex-start;
    padding:30px;
    box-shadow: ${({ index }: QuestNumProps) => index % 5 == 0 ? '0px 20px 40px -15px rgba(0, 0, 0, 0.05)' : '0px 20px 40px -15px rgba(0, 0, 0, 0.05)'};
    border-radius: ${({ index }: QuestNumProps) => index % 5 != 0 ? '0 19px 19px 0' : '19px 0 0 19px'};
    @media (max-width:1024px) {
      width: 300px;
    }
    @media (max-width:800px) {
      width: 80%;
      box-shadow: ${({ index }: QuestNumProps) => index % 2 == 0 ? '0px' : '0px'};
      border-radius: ${({ index }: QuestNumProps) => index % 2 != 0 ? '0' : '0'};
    }
`

export default QuestNum