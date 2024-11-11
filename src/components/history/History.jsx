import { useEffect, useState } from "react";
import './history.css';

function History(){

    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem("historic")))
    }, []);

    return(
        <>
        <div className="table">
            <details> 
                <summary> Ver histórico de pesquisas  </summary>
                <table>
                    <thead>
                        <tr>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {history.map((value) => (
                            <tr> 
                                <td>{value.cep}</td>
                                <td>{value.logradouro}</td>
                                <td>{value.complemento}</td>
                                <td>{value.bairro}</td>
                                <td>{value.localidade} - {value.uf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </details>
        </div>
        </>
    );
}

export default History;