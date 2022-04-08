import { IUserData, MAIN_IP } from 'App';
import Cookies from 'codebase/Cookies';
import CheckList from 'components/pages/UserProfile/CheckList';
import _ from 'lodash';
import blockItemMock, { IblockItemMock } from 'mockdata/UserProfileBlocks';
import diagnItemMock, { IdiagnItemMock } from 'mockdata/UserProfileDiagnItem';
import { useEffect, useState } from 'react';
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, ButtonBlock, ButtonWhite, DiagnCheckBlocks, ChecksResultsWrapper, DiagnosticTextBlack, ChecksResultsButton, ChecksResultsContainer, ChecksResultsContent, ChecksResultsPS, ChecksResultsImageContainer, ChecksResultsTitle, DiagnResult, DiagnResultItem, DiagnChecksResults, DiagnTextBlack, DiagnTextBlackBoldName, DiagnTextProfCenter, HomeTextBlock, Img, TextBlock } from 'styles/pages/UserProfile/UserProfile';
import ChecksResultsImage from 'components/pages/UserProfile/ChecksResultsImage'

interface Props {
    userData: IUserData | null
}

interface IResultsData{
    title: string,
    content: string,
    ps: string | null
}

const DefaultResultsDataMock = {
    title: 'Выполняйте пункты чек-листов и следите за изменениями растения',
    content: `Если Вы хотите улучшить свое эмоциональное состояние,
    повысить уровень работоспособности, восстановить
    внутренние ресурсы, то мы предлагаем Вам
    выполнить пункты чек-листов`,
    ps: `Чтобы открылся новый фрагмент, выполните  +5 заданий из любого чек–листа`
}

const LastResultsDataMock = {
    title: 'Поздравляем! Вы выполнили все пункты чек-листов!',
    content: `Теперь вы можете снова перейти к диагностике с целью определения динамики произошедших изменений.`,
    ps: null
}

const UserProfile = ({ userData }: Props) => {
    const [resultsData, setResultsData] = useState<IResultsData>(DefaultResultsDataMock)
    const [items, setItems] = useState<IdiagnItemMock[]>(diagnItemMock)
    const [blocks, setBlocks] = useState<IblockItemMock[]>(blockItemMock)
    const [checkResultCount, setCheckResultCount] = useState<number>(0)

    useEffect(() => {
        let tempCount = 0
        blocks.forEach(element => {
            element.checklist.forEach((check, index) => {
                tempCount = check.checked ? tempCount + 1 : tempCount
            });
        });
        if(tempCount == 40) {
            setResultsData(LastResultsDataMock)
        }
        else{
            setResultsData(DefaultResultsDataMock)
        }
        setCheckResultCount(tempCount)
    }, [blocks])

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
                if (index == idx) element.checked = !element.checked
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
                body: JSON.stringify({ login: userData.login, password: userData.password, checklist_id: checklist_id + 1, checklist: requestbody })
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
                            <div>
                                <DiagnosticTextBlack style={{ textAlign: "center" }}>{value.title}</DiagnosticTextBlack>
                                <DiagnosticTextBlack style={{ textAlign: "center" }}>{value.name}</DiagnosticTextBlack>
                            </div>
                            <Button href={`profile/diagnresult${index + 1}`}>Посмотреть результат</Button>
                        </DiagnResultItem>
                    )
                }
            </DiagnResult>
            <DiagnChecksResults>
                <ChecksResultsWrapper>
                    <ChecksResultsContainer>
                        <ChecksResultsTitle>{resultsData.title}</ChecksResultsTitle>
                        <ChecksResultsContent>{resultsData.content}</ChecksResultsContent>
                        <ChecksResultsPS>{resultsData.ps ? resultsData.ps : <Button href={`diagnostics`}>К диагностике</Button>}</ChecksResultsPS>
                    </ChecksResultsContainer>
                    <ChecksResultsImageContainer>
                        <ChecksResultsImage count={checkResultCount} />
                    </ChecksResultsImageContainer>
                </ChecksResultsWrapper>
            </DiagnChecksResults>
            <a id="checklists" />
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