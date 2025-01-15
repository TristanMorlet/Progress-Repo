import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/joblistings'
import ViewAllJobs from '../components/ViewAllJobs'


export default function HomePage() {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
    </>
  );
}
