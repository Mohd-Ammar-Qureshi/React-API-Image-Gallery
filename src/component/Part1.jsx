import React from 'react'
import { useParams } from 'react-router-dom'

const Part1 = () => {

    const params = useParams()

  return (
    <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center mb-8'>
        Part1- {params.id}
    </div>
  )
}

export default Part1