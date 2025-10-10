import { useState } from 'react';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data'

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  const handleSelect = (selectedButon) => {
    setSelectedTopic(selectedButon)
  }

  return (
    <div>
      {/* We can use Cs like an HTML element inside other or same C */}
      {/* <Header></Header> OR */}
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* O/ping list dynamically */}
            {CORE_CONCEPTS.map((concept)=> <CoreConcept key={concept.title} {...concept} />)}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic==='components'}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic==='jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic==='props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic==='state'}>State</TabButton>
          </menu>
            {!selectedTopic? <p>Please select a topic</p> : (
              <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          
        </section>
      </main>
    </div>
  );
}

export default App;
