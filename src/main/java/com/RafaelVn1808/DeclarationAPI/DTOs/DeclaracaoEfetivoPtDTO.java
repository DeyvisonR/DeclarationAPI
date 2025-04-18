package com.RafaelVn1808.DeclarationAPI.DTOs;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class DeclaracaoEfetivoPtDTO {
    public String nome;
    public Integer matricula;
    public Integer vinculo;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate dataInicio;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate dataFim;
    public Integer numberPort;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate dataPtDt;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate dataDoe;
    public Integer numberDoe;
    public String cargo;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate posse;
}


