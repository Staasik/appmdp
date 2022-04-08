import styled from 'styled-components'
import { ReactComponent as SelectedImg} from 'images/test2/selected.svg'

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
    @media (max-width:1430px) {
      width: 40%;
    }
    @media (max-width:1000px) {
      width: 80%;
      box-shadow: ${({ index }: QuestNumProps) => index % 2 == 0 ? '0px' : '0px'};
      border-radius: ${({ index }: QuestNumProps) => index % 2 != 0 ? '0' : '0'};
    }
`

export const Image = styled.img`
  border-radius: 10px;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden ;
  position: relative;
`
export const SelectedImage = styled(SelectedImg)`
  position: absolute;
  top: -2px;
  left: 0;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`
export const QuestNumImg = styled.div<QuestNumProps>`
    display:flex;
    flex-direction:column;
    width: 44%;
    justify-content:center;
    align-items:center;
    padding:30px;
    @media (max-width:1430px) {
      width: 40%;
    }
    @media (max-width:1000px) {
      width: 80%;
      padding:15px;
    }
`
interface QuestNumProps {
  index: number,
}

export const QuestNumFive = styled.div<QuestNumProps>`
  display:flex;
  flex-direction:column;
  width: 400px;
  gap:40px;    
  justify-content:flex-start;
  align-items:flex-start;
  padding:20px;
  @media (max-width:1300px) {
    width: 90%;
  }
  @media (max-width:1300px) {
    gap:20px;  
  }
`
export default QuestNum