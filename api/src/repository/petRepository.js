import { con } from './connection.js'

export async function inserirPet(pet) {
    const comando =
        `
        insert into tb_pet (nm_apelido)
        values (?)

        `
    const resposta = await con.query(comando, [pet.nome])
    return resposta[0]
}

export async function listarPets() {
    const comando =
    `
    select 
    id_pet			id,
    nm_apelido		nome
    from tb_pet;

    `
    const resposta = await con.query (comando)
    return resposta;
}