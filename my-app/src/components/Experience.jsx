import React from 'react'
// import assets (images and icons of languages and technologies)
import temp from '../assets/logo192.png'

const Experience = () => {

    // change images, title and style based on the language/technology we put
    const techs = [
        {
            id: 1,
            src: temp,
            title: 'React',
            style: 'shadow-blue-500' // this is the outline behind the box
        },
        {
            id: 2,
            src: temp,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: temp,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: temp,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: temp,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: temp,
            title: 'React',
            style: 'shadow-blue-500'
        }

    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I have worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg" ${style}`}>
                            <img src={temp} alt="" />
                            <p className="mt-4">HTML</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience