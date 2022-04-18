import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs,setJobs] = useState([])
  const [value,setValue] = useState(0)

  const fetchJobs = async ()=>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchJobs()
  }, [])
  
  if(loading){
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const {company, dates, duties , title , id}=jobs[value]
  
  return <section className='section'>
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* {btn container} */}
     <div className="btn-container">
       {jobs.map((e, index)=>{
         return(
           <button key={index} className={`job-btn ${index === value ?'active-btn':""}`} onClick={()=> setValue(index)}>{e.company}</button>
         )
       })}
     </div>

      {/* {job info} */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((e,index)=>{
          return(
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{e}</p>
            </div>
          )
        })}
      </article>
    </div>
  </section>
}

export default App
