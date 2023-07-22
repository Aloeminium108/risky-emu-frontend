import React, { FunctionComponent, useEffect, useState } from "react"
import { Feature } from "../types/Feature";
import FeatureCard from "../components/Cards/FeatureCard";

const HomePage: FunctionComponent = () => {

  const [ features, setFeatures ] = useState<Feature[]>([]);

  useEffect(() => {

    const getFeatures = async () => {
      const features = await fetch(`${process.env.REACT_APP_SERVER_URL}/features/`, {
        method: 'GET',
        mode: 'cors'
      })
      const featuresList = await features.json();
      console.log(featuresList)
      setFeatures(featuresList);

    }

    getFeatures();

  }, []);

  return (
    <main>
      {features.map((feature: Feature) => {
        return <FeatureCard feature={feature} />
      })}
    </main>
  )
}

export default HomePage