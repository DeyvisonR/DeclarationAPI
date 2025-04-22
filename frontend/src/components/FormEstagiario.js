import React, { useState } from 'react';
import axios from 'axios';

function FormEstagiario() {
  const [formData, setFormData] = useState({
    nome: '',
    curso: '',
    matricula: '',
    vinculo: '',
    dataInicio: '',
    dataFim: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const dadosFormatados = {
      ...formData,
      dataInicio: formatDate(formData.dataInicio),
      dataFim: formatDate(formData.dataFim)
    };

    try {
      const response = await axios.post('http://localhost:8080/api/declaracoes/estagio/pdf', dadosFormatados, {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="curso" placeholder="Curso" onChange={handleChange} />
      <input name="matricula" placeholder="Matrícula" type="number" onChange={handleChange} />
      <input name="vinculo" placeholder="Vínculo" type="number" onChange={handleChange} />
      <input name="dataInicio" type="date" onChange={handleChange} />
      <input name="dataFim" type="date" onChange={handleChange} />
      <button type="submit">Gerar Declaração</button>
    </form>
  );
}

export default FormEstagiario;
