import { useEffect, useState } from 'react'

const Tab = () => {
    const [datas, setDatas] = useState([])
    const [active, setActive] = useState(0)
    const [showContent, setShowContent] = useState(false)
    useEffect(() => {
        fetchData();
    }, [])
    const url = 'https://course-api.com/react-tabs-project'
    const fetchData = async () => {
        const res = await fetch(url);
        const store = await res.json();
        setDatas(store)
    }
    const showHandler = (i) => {
        setActive(i)
    }

    return (
        <section className='section tab'>
            <div className="container">
                <div className="tabs">
                    <ul className='tab__lists'>
                        {datas.map((data, index) => {
                            return <li onClick={() => showHandler(index)} className={`${active == index ? 'active-tab' : ''}`} key={data.id}>{data.company}</li>
                        })}
                    </ul>
                    {datas.map((data, index) => {
                        if (active === index) {
                            return (
                                <div className="content" key={index}>
                                    <h2 className='company'>{data.company}</h2>
                                    <h2 className='title'>{data.title}</h2>
                                    <ul>
                                        {
                                            data.duties.map((duty, index) => {
                                                return <p key={index}>{duty}</p>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default Tab