import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';   // substitui a tag <a> p melhorar performance
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';


interface Repository {     //tipar apenas o que for utilizar da api -  ver na api e colar aqui
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');          // estado para armazenar o valor digitado no input
    const [inputError, setInputError] = useState(''); // 1. para listar erros
    const [repositories, setRepositories] = useState<Repository[]>(() => {    // 1. para listar os repositórios
        const storageRepositories = localStorage.getItem(                  // Para armazenar os repositorios encontrados e deixar salvo
            '@GithubExplorer:repositories',
        );

        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories),);  // Salva os arquivos apenas para essa aplicação
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {   //Adicionar novo repositório
        event.preventDefault();      // event e FormEvent é para evitar o recarregamento da pagina quando clica no submit do formulário
        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');  // se não localizar um repositório, informar essa msg de erro.
            return;
        }


        try {               //2. colocar num try-catch para gerar erro de busca

            const response = await api.get<Repository>(`repos/${newRepo}`); // chamar a api
            const repository = response.data;
            setRepositories([...repositories, repository]);  // listar os repositórios e acrescentar o ultimo
            setNewRepo('');   // para limpar o input toda vez que buscar novo repositório
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca do repositório');

        }

    }

    return (
        <>
            <img src={logoImg} alt="Imagem com a logo do Github Explorer" />
            <Title>Explore Repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            { inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((repository) => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`} >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );

};

export default Dashboard;
