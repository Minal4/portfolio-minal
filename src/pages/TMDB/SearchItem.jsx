import React, { useEffect, useState } from 'react'

const SearchItem = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, [])
    return (
        <div>
            asdasdsadss
        </div>
    )
}

export default SearchItem
