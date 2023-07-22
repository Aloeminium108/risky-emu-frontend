import React, { FunctionComponent, useEffect, useState } from "react"
import { Program } from "../../types/Feature";
import ProgramCard from "../../components/Cards/ProgramCard";

const AllProgramsPage: FunctionComponent = () => {

  const [ programs, setPrograms ] = useState<Program[]>([]);

  useEffect(() => {

    const getPrograms = async () => {
      const programs = await fetch(`${process.env.REACT_APP_SERVER_URL}/programs/`, {
        method: 'GET',
        mode: 'cors'
      })
      const programsList = await programs.json();
      setPrograms(programsList);

    }

    getPrograms();

  }, []);

  return (
    <main>
      {programs.map((program: Program) => {
        return <ProgramCard program={program} />
      })}
    </main>
  )
}

export default AllProgramsPage