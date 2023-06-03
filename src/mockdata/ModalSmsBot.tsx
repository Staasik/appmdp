import {useLayoutEffect, useState} from "react"
import colors from "utils/colors"

export interface ISmsBotMock {
    message: string,
    answer(): JSX.Element,
}

const Answer1 = () => {
    return(
        <div>
            😉Спокойствие - состояние, к которому порой стремится каждый из нас.<br/>
            На протяжении веков в нем старались пребывать великие мудрецы и философы.<br/>
            Попробуйте замедлиться, остановиться на какое-то время.<br/>
            Постарайтесь прочувствовать эту эмоцию и осознать свои мысли. Побудьте с самим собой в тишине, попробуйте услышать себя и свои желания.<br/>
            Можно записать свои мысли, которые приходят в голову или просто почитать книжку.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer2 = () => {
    return(
        <div>
            😋Вдохновение – одно из самых прекрасных чувств, которые может испытывать человек. Когда вы чувствуйте себя вдохновленным, кажется, что вы действительно можете все. А творить вам помогут приемы креативного мышления! ✏️Можете выбрать любой прием и создать какой-то совершенно новый неординарный продукт!<br/>
            <b>  Метод фокальных объектов</b><br/>
            – это метод поиска новых идей и характеристик объекта на основе присоединения к исходному объекту свойств других, выбранных случайно, объектов.<br/>
            <b>  Морфологический ящик</b><br/>
            – это метод, в итоге которого даётся ответ на более общий вопрос посредством поиска всевозможных вариантов частных решений, независимо от того, что в исходной задаче речь шла только об одной конкретной системе.<br/>
            <b>  Ментальные карты</b><br/>
            – это наглядное представление естественного течения мыслей от одной центральной идеи.<br/>
        </div>
    )
}
const Answer3 = () => {
    return(
        <div>
           🥺Тревога — эмоциональное состояние, вызванное ожиданием опасности или угрозы.<br/>
            Тревожность часто возникает из-за неопределенности в действиях и чувствах.<br/>
            Немного о том, как мы можем справиться с этим состоянием.<br/>
            👍Попробуйте выполнить следующие рекомендации, чтобы снизить уровень тревожности:<br/>
            1. Выполните дыхательную гимнастику. Когда вы дышите медленно, вы успокаиваетесь. Вот пример дыхательной <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="https://www.youtube.com/watch?v=xltKeze0LEY" target="_blank">гимнастики</a><br/>   
            2. Закройте глаза на 1 минуту. Это поможет абстрагироваться от внешнего мира и побыть с самим собой.<br/>
            3. Поочередно расслабляйте мышцы во всём теле. Такая  <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="https://www.youtube.com/watch?v=29IkA7zcEBg" target="_blank">практика</a> поможет справиться с тревожностью и почувствовать себя увереннее.<br/>
            4. Осознайте причину вашей тревоги. Суть в том, чтобы признать существование беспокойства, а не полностью избавиться от него. Не игнорируйте то, что вызывает чувство тревожности.<br/>
            5. Переместите свой фокус внимания. Постарайтесь отвлечься от своих тревожных мыслей. Когда на вас накатывает приступ тревоги, буквально оглянитесь вокруг и сосчитайте количество предметов, которые вы видите, затем количество тех, которые можете потрогать. До мелочей вспомните, что вы делали вчера и т.д.<br/>
            6. Подумайте умеете ли вы говорить «нет». Стоит научиться говорить «нет» сразу, если вы понимаете, что обязательства, возлагаемые на вас, превышают ваши возможности. В этом случае вы обезопасите себя от ситуации, когда придется мучиться по поводу того, что не следовало соглашаться на какое-то сомнительное предложение.<br/>
            Но если приступы тревоги происходят все чаще или вы сталкиваетесь с паническими атаками, лучше разбираться с этим с помощью специалиста.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer4 = () => {
    return(
        <div>
            😔Усталость — это естественная реакция нашего организма на переутомление, напряжение или нагрузки.Важно не только продуктивно работать, но и обращать на себя внимание и давать отдых. Попробуйте выполнить наши рекомендации:🧘‍♂️<br/>
            1. Просто добавь воды. Освежиться, умыть лицо — такой совет дают психологи, рекомендуя водную терапию против усталости и для повышения энергии.<br/>
            2. Зарядитесь собственным отражением или комплиментом. Мимолетный взгляд в зеркало обеспечивает заряд бодрости, словно комплимент от лица противоположного пола.<br/>
            3. Смените вид деятельности. Отложите на время привычные дела и переключитесь на что-то другое<br/>
            4. Выполните простую <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="https://vk.com/video14969601_456239030?list=02dda14f948fba7769" target="_blank">разминку</a>. Легкая физическая активность помогает побороть усталость.<br/>
            5. Включите любимую музыку, которая, по мнению психологов, отвлекает от ощущения усталости.<br/>
            6. Смените деятельность. Необязательно эта деятельность должна быть продуктивной. Сходите на 30-минутную прогулку или посмотрите интересный фильм.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer5 = () => {
    return(
        <div>
            😡Гнев - это естественная человеческая эмоция. Когда ваши ученики и коллеги не слышать или не понимают вас, вы сердитесь.<br/>
            Считается, что гнев — нормальная реакция организма на внешние раздражители. При этом общепризнанно, что с этой нормальной реакцией можно и нужно бороться.<br/>
            Можно дать некоторые рекомендации о том, как контролировать свой гнев и направлять его в правильное русло:<br/>
            1. Дышите медленно и глубоко🌷<br/>
            Когда вы вдыхаете и выдыхаете, это помогает думать, прежде чем действовать. Дыхание также помогает выделить время, чтобы подумать о том, как эффективно направить свой гнев.<br/>
            2. Задержите свою ответную реакцию на ту или иную ситуацию.🌪<br/>
            Скажите себе «Стоп!». Спросите себя самого себя «Где я ?», «Что я вижу?», «Что я слышу ?», «Какие запахи чувствую». У вас это займет не больше 2 минут.<br/>
            Эта задержка даст вам достаточно времени на то, чтобы успокоиться. Можно досчитать до десяти, прежде чем отреагировать на стрессовую ситуацию, чтобы дать себе достаточно времени на обработку поступившей информации и подготовку соответствующей реакции<br/>
            3. Выберите правильное место и правильное время⌚<br/>
            Повышение голоса отрицательно сказывается на взаимоотношениях с коллегами и самооценке ребенка. Лучше отойти с учеником или коллегой в сторону и без криков поговорить о произошедшем.<br/>
            4. Двигайтесь!🚀<br/>
            Физическая активность, вроде бега, отжимания или занятий йогой, поможет снизить частоту возникновения и интенсивность вашего гнева.<br/>
            Если регулярно заниматься спортом и давать выход своей энергии, это может сделать вас менее склонным к гневу и эмоциональным вспышка.<br/>
            5. Медитируйте. 💫 Медитация оказывает положительный краткосрочный эффект на обработку эмоций. Исследование, проведенное в Гарварде, показало, что, помимо физического расслабления и умиротворения, осознанная медитация увеличивает плотность серого вещества в областях мозга, отвечающих за познание, память, самосознание, сострадание и самоанализ.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer6 = () => {
    return(
        <div>
            😚Что тут говорить! Счастье – это прекрасно! Счастье – это когда хочется делиться! Поделитесь с близкими своими счастливыми моментами, сделайте подарок другу или просто танцуйте! Танцуйте под любимую музыку!<br/>
            А вот вам и замечательная счастливая песня о том, как можно светить и озарять другим путь!<br/>
            🎵Песня «Свети».<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer7 = () => {
    return(
        <div>
            🧡Хороший выбор!!!<br/>
            С данным методом можно ознакомиться по <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="https://4brain.ru/blog/метод-фокальных-объектов-мфо" target="_blank">ссылке</a>.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer8 = () => {
    return(
        <div>
            🧡Отличный выбор!!!<br/>
            С данным методом можно ознакомиться по <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="https://4brain.ru/blog/метод-морфологического-ящика/" target="_blank">ссылке</a>.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer9 = () => {
    return(
        <div>
            🧡Очень интересный метод!!!<br/>
            С данным методом можно ознакомиться по <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="https://trends.rbc.ru/trends/education/602e8b029a79479cc9e27696" target="_blank">ссылке</a>.<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
function randomInteger(min:number, max:number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
    }
const Answer10 = () => {
    const mass = ["✨Ваши ожидания не напрасны.",
                "✨Не стоит тратить время и силы на мелочи, нужно думать о главном.",
                "✨Каким бы огромным ни было расстояние – оно начинается с первого шага.",
                "✨Стоя на месте, двигаться можно только назад.",
                "✨Любое дело начинается с веры в себя.",
                "✨Любой успех дела определяется его целью.",
                "✨Каждый из нас уникален. Когда одна вершина покорена, самое время покорять вторую.",
                "✨Перемены уже на пороге!"]
               
    const [item, setItem] = useState(0)
    useLayoutEffect(() => {
        setItem(randomInteger(0,7))
    }, [])

    return(
        <div>
            {mass[item]}<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer11 = () => {
    return(
        <div>
            📖Советую к прочтению книгу Ю.П. Азаров «Тайны педагогического мастерства».<br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer12 = () => {
    return(
        <div>
            📻Отличный выбор! Переходите в наши рекомендации и прослушайте понравившийся плейлист.<br/>
            <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="/main/recommend#playlists" target="_blank">Перейти</a><br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
           ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer13 = () => {
    return(
        <div>
            🎥Переходите в наши рекомендации и выберете понравившийся вам фильм. Удачного просмотра!<br/>
            <a style={{color:colors.BLUE_LIGHT,textDecoration:"none"}} href="/main/recommend#films" target="_blank">Перейти</a><br/>
            <div style={{marginTop:"20px"}}>Надеюсь, что я был тебе полезен!</div>
            ❓Чем я ещё могу помочь?
        </div>
    )
}
const Answer14 = () => {
    return(
            <div>💛Отлично! До скорого!</div>  
    )
}

export const BotAnswers: ISmsBotMock[] = [
    {
        message: "Спокойствие",
        answer: Answer1,
    },
    {
        message: "Вдохновение",
        answer: Answer2,
    },
    {
        message: "Тревогу",
        answer: Answer3,
    },
    {
        message: "Усталость",
        answer: Answer4,
    },
    {
        message: "Гнев",
        answer: Answer5,
    },
    {
        message: "Счастье",
        answer: Answer6,
    },
    {
        message: "Метод фокальных объектов",
        answer: Answer7,
    },
    {
        message: "Морфологический ящик",
        answer: Answer8,
    },
    {
        message: "Ментальные карты",
        answer: Answer9,
    },
    {
        message: "Вытянуть предсказание",
        answer: Answer10,
    },
    {
        message: "Что почитать?",
        answer: Answer11,
    },
    {
        message: "Послушать музыку",
        answer: Answer12
    },
    {
        message: "Какой фильм посмотреть?",
        answer: Answer13
    },
    {
        message: "Спасибо, помощь не нужна",
        answer: Answer14
    },
]

export default BotAnswers