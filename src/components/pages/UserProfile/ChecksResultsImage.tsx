import { ReactComponent as Image0 } from 'images/UserProfile/CheckListsResults/0.svg'
import { ReactComponent as Image5 } from 'images/UserProfile/CheckListsResults/5.svg'
import { ReactComponent as Image10 } from 'images/UserProfile/CheckListsResults/10.svg'
import { ReactComponent as Image15 } from 'images/UserProfile/CheckListsResults/15.svg'
import { ReactComponent as Image20 } from 'images/UserProfile/CheckListsResults/20.svg'
import { ReactComponent as Image25 } from 'images/UserProfile/CheckListsResults/25.svg'
import { ReactComponent as Image30 } from 'images/UserProfile/CheckListsResults/30.svg'
import { ReactComponent as Image35 } from 'images/UserProfile/CheckListsResults/35.svg'
import { ReactComponent as Image40 } from 'images/UserProfile/CheckListsResults/40.svg'

interface Props {
    count: number
}
export const ChecksResultsImage = ({ count }: Props) => {
    return (
        <>
            {
                {
                    0: <Image0 />,
                    1: <Image5 />,
                    2: <Image10 />,
                    3: <Image15 />,
                    4: <Image20 />,
                    5: <Image25 />,
                    6: <Image30 />,
                    7: <Image35 />,
                    8: <Image40 />,
                }[Math.floor(count / 5)]
            }
        </>
    )
}
export default ChecksResultsImage