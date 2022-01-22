import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  console.log(repositories);

  return (
      <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
          {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
          })}
        </ul>
      </section>
    )
}