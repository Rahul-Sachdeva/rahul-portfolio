import ProjectsSection from '@/components/ProjectsSection/ProjectSection'
import SkillsSection from '@/components/SkillsSection/SkillsSection'
import React from 'react'

function page() {
  return (
    <div className='w-3/4 mx-auto z-20'>
      <SkillsSection/>
      <ProjectsSection/>
    </div>
  )
}

export default page