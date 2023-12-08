import React from 'react'

import EarthCanvas from '../sub/Earth'
type Props = {}

const EarthComp = (props: Props) => {
  return (
    <div className='w-full h-full'><EarthCanvas/></div>
  )
}
export default EarthComp;