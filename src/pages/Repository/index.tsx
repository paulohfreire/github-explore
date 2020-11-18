import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {         //Criado para tipar o params.repository
    repository: string;
}

const Dashboard: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();    // para ler as informações da rota recebida. no caso os detalhes do repositório
    return <h1>Repository:{params.repository}</h1>;
};

export default Dashboard;
