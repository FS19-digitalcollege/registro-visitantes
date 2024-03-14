import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";

const VisitantePage = () => {

    const { register, handleSubmit, setValue } = useForm();

    function enviarDados(dados){
        if(!dados.visitante_genero){
            alert("Escolha o gênero");
            return;
        }
        fetch("http://localhost:8080/visitantes", {
            method: "Post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then( res => res.json())
        .then( res => {
            if(res.affectedRows > 0){
                alert("Visitante acesso liberado")
            }
        })
    }

    return (
        <>
            <h1>Visitantes</h1>
            <form onSubmit={handleSubmit(enviarDados)}>
                <label>Nome</label>
                <InputText 
                    placeholder="Digite seu nome"
                    {...register("visitante_nome", { required: true })}
                />
                <label>Gênero</label>
                <select
                    onChange={(e) => setValue("visitante_genero", e.target.value)}
                    defaultValue={"Masculino"}
                >
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outros</option>
                </select>
                <label>Profissão</label>
                <InputText 
                    placeholder="Digite sua profissao"
                    {...register("visitante_profissao", { required: true })}
                />
                <label>Cidade</label>
                <InputText 
                    placeholder="Digite sua cidade"
                    {...register("visitante_cidade", { required: true })}
                />
                <label>Bairro</label>
                <InputText 
                    placeholder="Digite seu bairro"
                    {...register("visitante_bairro", { required: true })}
                />
                <label>CPF</label>
                <InputText 
                    placeholder="Digite seu cpf"
                    {...register("visitante_cpf", { required: true })}
                />
                <label>Idade</label>
                <InputText 
                    placeholder="Digite seu idade"
                    {...register("visitante_idade", { required: true })}
                />
                <button type="submit">Enviar</button>
            </form> 
        </>
    );
}

export default VisitantePage;