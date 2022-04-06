import { IUserData, MAIN_IP } from 'App';
import Cookies from 'codebase/Cookies';
import CheckList from 'components/pages/UserProfile/CheckList';
import _ from 'lodash';
import blockItemMock, { IblockItemMock } from 'mockdata/UserProfileBlocks';
import diagnItemMock, { IdiagnItemMock } from 'mockdata/UserProfileDiagnItem';
import { useEffect, useState } from 'react';
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, ButtonBlock, ButtonWhite, DiagnCheckBlocks, DiagnosticTextBlack, DiagnResult, DiagnResultItem, DiagnTextBlack, DiagnTextBlackBoldName, DiagnTextProfCenter, HomeTextBlock, Img, TextBlock } from 'styles/pages/UserProfile/UserProfile';

interface Props {
    userData: IUserData | null
}

const UserProfile = ({ userData }: Props) => {
    const [items, setItems] = useState<IdiagnItemMock[]>(diagnItemMock)
    const [blocks, setBlocks] = useState<IblockItemMock[]>(blockItemMock)

    useEffect(() => {
        if (userData) {
            fetch(process.env.NODE_ENV == 'development' ? "/getCheckLists" : `http://${MAIN_IP}:5000/getCheckLists`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ login: userData.login, password: userData.password })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let tempBlocks = blocks
                    tempBlocks.forEach((element, idx) => {
                        element.checklist.forEach((check, index) => {
                            check.checked = (_.find(data.data, { checklist_id: idx + 1 }).data[index] == 1)
                        });
                    });
                    setBlocks([...tempBlocks])
                });
        }
    }, [userData])

    const onChange = (checklist_id: number, index: number) => {
        if (userData) {
            let tempblocks = blocks
            let tempCheckList = tempblocks[checklist_id]
            tempCheckList.checklist.forEach((element, idx) => {
                if(index == idx) element.checked = !element.checked
            });
            tempblocks[checklist_id] = tempCheckList
            setBlocks([...tempblocks])
            let requestbody = tempCheckList.checklist.map((value, index) => value.checked ? 1 : 0)
            fetch(process.env.NODE_ENV == 'development' ? "/setCheckLists" : `http://${MAIN_IP}:5000/setCheckLists`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ login: userData.login, password: userData.password, checklist_id: checklist_id + 1, checklist: requestbody})
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                });
        }
    }

    const Logout = () => {
        Cookies.deleteCookie("login")
        Cookies.deleteCookie("password")
        document.location.href = '/main'
    }

    return (
        <DiagHtml>
            <HomeTextBlock>
                <TextBlock>
                    <DiagnTextProfCenter>Здравствуйте, {userData?.name}</DiagnTextProfCenter>
                    <DiagnTextBlack>В личном кабинете появились новые чек-листы для вас</DiagnTextBlack>
                </TextBlock>
                <ButtonBlock>
                    <ButtonWhite onClick={() => Logout()}>Выйти</ButtonWhite>
                </ButtonBlock>
            </HomeTextBlock>
            <DiagnTextBlackBoldName>Результаты  диагностик:</DiagnTextBlackBoldName>
            <DiagnResult>
                {
                    items.map((value, index) =>
                        <DiagnResultItem key={index}>
                            <Img src={value.image} />
                            <DiagnosticTextBlack style={{ textAlign: "center"}}>{value.title}</DiagnosticTextBlack>
                            <Button to={`diagnresult${index + 1}`}>Посмотреть результат</Button>
                        </DiagnResultItem>
                    )
                }
            </DiagnResult>
            <DiagnTextBlackBoldName>Чек–листы:</DiagnTextBlackBoldName>
            <DiagnCheckBlocks>
                {
                    blocks.map((value, index) =>
                        <CheckList key={index} image={value.image} title={value.title} description={value.description} checklist={value.checklist} pdf={value.pdf} name={value.name} onChange={(value: number) => onChange(index, value)} />
                    )
                }
            </DiagnCheckBlocks>
        </DiagHtml>
    );
}

export default UserProfile;