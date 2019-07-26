import React, { Component } from 'react';

class Lista extends Component {
    render() {
        let list = [
            {
                nome: 'Denilson',
                email: 'denilson@teste'
            },

            {
                nome: 'João',
                email: 'joao@teste'
            }
        ]
        return (
            <div>
                <table border = '1'>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return  <tr>
                            <td>
                                {item.nome}
                            </td>

                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>


        )
    }
}
export default Lista;