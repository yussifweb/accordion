import React from "react";
import "./styles.css";
import Accord from './Accord';

function App() {
  return (
    <div className="App">
      
      <Accord  title="Who we are" head="From Africans to Africans" text="We are Developer Avocados in Africa,
       trying to bridge the gap between the diversity of developers here and over there."></Accord>

      <Accord  title="Is this limited to only Programmers" head="The tech Ecosystem is large" 
      text="The emerging tech Ecosystem is large an really supportive, as much as we would love
       to also go into Datascience and 3D-Animation, we are limited to focusing on software developers for now."></Accord>

      <Accord  title="Number of candidates per cohort" head="How many budding developer do we select in every cohort"
       text="The total number of budding developers we enroll in each cohort totally depends on the number of resources 
       we are able to gather! Our first cohort was 22, while our second cohort is 50"></Accord>

      <Accord  title="How many African countries are you in" head="We're currently in 4 African countries" 
      text="Our goal is to be able to support as many Africans as possible, we're currenlty active in four 
      African countries, - Nigeria - Ghana - Zambia and Kenya"></Accord>

    </div>
  );
}

export default App;