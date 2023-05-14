
interface IDiagnosticItem{
    id: number,
    image: string,
    title: string,
    published: boolean
}

interface IProps{
    item: IDiagnosticItem
}

const Diagnostic = ({item}: IProps) => {
    return (
    <div>
        <img src=""/>
        <div>{item.title}</div>
        <button>Опубликовать</button>
        <button>Редактировать</button>
        <button>Удалить</button>
    </div>
    )
}
export default Diagnostic