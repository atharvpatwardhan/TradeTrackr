import React from 'react'

const News = (data) => {
  return (
    <div>
        {[data].map((news)=>{
            return(
                <div>
                    <h1 className='text-5xl text-red'>{news.headline}</h1>
                </div>
            )

        })}
    </div>
  )
}

export default News