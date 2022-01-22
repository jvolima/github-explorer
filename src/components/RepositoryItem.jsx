export function RepositoryItem(props) {
  return(
    //As props servem para "linkar" as propriedades
    //de um atributo a suas respectivas tags html
    //referenciadas em outros .jsx
    <li>
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>

    <a href={props.repository.html_url}>
      Acessar repositório
    </a>
  </li>
  );
}