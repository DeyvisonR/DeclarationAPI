import { useState } from 'react'
import css from  './App.module.css';
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios';

function App() {
  const [clicked, setClicked] = useState(false)
  const [form, setForm] = useState({
    nome: "",
    matricula: "",
    vinculo: "",
    cargo: "",
    dateInicio: "",
    dateFim: ""
  })

  function changeClicked(){
    setClicked(!clicked)
  }

  async function enviarForm(e){
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:8080/api/declaracoes/estagio/pdf', form, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'declaracao-estagiario.pdf';
      a.click();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao gerar PDF. Verifique a API.');
    }
  }

  return (
    <>
      <main>
        
        <div className={css.center}>
          <div className={css.titulo}>
          {clicked ? <><p onClick={changeClicked}><IoArrowBack /></p></> : <></>}
            <h1>Gerador de Declarações</h1>
          </div>
          {clicked ? <>
          <div className={css.formulario}>
            <form onSubmit={enviarForm}>
              <h3>Nome:</h3>
              <input required value={form.nome} onChange={(e)=>{setForm({...form, nome: e.target.value})}} type="text"/>
              <h3>Matricula:</h3>
              <input required value={form.matricula} onChange={(e)=>{setForm({...form, matricula: e.target.value})}} type="text"/>
              <h3>Vinculo:</h3>
              <input required value={form.vinculo} onChange={(e)=>{setForm({...form, vinculo: e.target.value})}} type="text"/>
              <h3>Cargo:</h3>
              <input required value={form.cargo} onChange={(e)=>{setForm({...form, cargo: e.target.value})}} type="text"/>
              <h3>Data de inicio:</h3>
              <input required value={form.dateInicio} type="date" onChange={(e)=>{setForm({...form, dateInicio: e.target.value})}}/>
              <h3>Data de fim:</h3>
              <input required value={form.dateFim} type="date" onChange={(e)=>{setForm({...form, dateFim: e.target.value})}}/>
              <input type="submit" value="Enviar" />
            </form>
          </div>
          </> : <>
          <div className={css.options__declaracao}>
            <div onClick={()=>changeClicked()} className={css.option__declaracao}>
              <h2>Declaração de Estagio</h2>
            </div>
            <div onClick={()=>changeClicked()} className={css.option__declaracao}>
              <h2>Declaração de Efetivo</h2>
            </div>
            <div onClick={()=>changeClicked()} className={css.option__declaracao}>
              <h2>Declaração de Temporario</h2>
            </div>
          </div>
          </>}

        </div>
        
      </main>
    </>
  )
}

export default App

