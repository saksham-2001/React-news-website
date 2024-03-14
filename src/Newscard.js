import React from 'react'
import './Newscard.css'


const Newscard = ( {Mode, id,topic, title, text,link,image}) => {
  return (
    <div className={"card_"+Mode}>
      
        <h3 className={'myheading_'+Mode}>{title} </h3>
        <p className={'italictext_'+Mode}>#{id} in {topic} news</p>
        <p className={'myText_'+Mode}>{text}</p>
        <a href={link} target="_blank" className='link' >Read More...</a>
        </div>
        
    
  )
}

export default Newscard
