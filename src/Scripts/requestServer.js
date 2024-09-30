
export async function getSubjects(){
  const response = await fetch('http://localhost:3005/subjects');
  const data = await response.json();
  if(response.ok){
    console.log("GET: OK");
  }
  return data;

}

export async function addSubject(subject){
  const response = await fetch('http://localhost:3005/subjects', {
    method: 'POST',
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify(subject)
  })
  
  if(response.ok){
    console.log("Disciplina cadastrada com sucesso!");
  }
}

export async function deleteSubject(id){
  const response = await fetch(`http://localhost:3005/subjects/${id}`,
    {
      method: 'DELETE'
    }
  )

  if(response.ok){
    console.log("Disciplina removida com sucesso!");
    getSubjects();
  }
}