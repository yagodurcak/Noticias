import React from 'react'

function Noticias({noticeGrid}) {


    return (
        <div className="grid grid-cols-3 gap-4 m-10">
            {noticeGrid.map(noticia =>
                <div className="bg-gray-100 border-4">
                 
                        <img src={noticia.urlToImage} className="object-contain"/>
               
                    <h1 key={noticia.url} className="text-2xl font-bold" >{noticia.title}</h1>
                    <p className="text-xl font-semibold italic" >{noticia.author}</p>
                    <p className="text-xl  ">{noticia.description}</p>
                </div>
            )}
        </div>
    )
}

export default Noticias
