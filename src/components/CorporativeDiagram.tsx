import Mermaid from '@theme/Mermaid';

 const CorporativeDiagram = () => {

  return (

<Mermaid
  value={`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>

  )
}

export default CorporativeDiagram;