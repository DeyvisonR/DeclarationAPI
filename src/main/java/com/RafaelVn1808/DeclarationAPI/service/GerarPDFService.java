package com.RafaelVn1808.DeclarationAPI.service;

import com.RafaelVn1808.DeclarationAPI.DTOs.DeclaracaoEfetivoPtDTO;
import com.RafaelVn1808.DeclarationAPI.DTOs.DeclaracaoEstagioDTO;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;

@Service
public class GerarPDFService {

    public byte[] gerarDeclaracaoEstagio(DeclaracaoEstagioDTO dto) {
        DeclaracaoEstagio declaracao = new DeclaracaoEstagio(
                dto.nome, dto.matricula, dto.vinculo, dto.dataInicio, dto.dataFim, dto.curso
        );

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        document.add(new Paragraph(declaracao.toString()));

        document.close();
        return baos.toByteArray();
    }

    public byte[] gerarDeclaracaoEfetivo(DeclaracaoEfetivoPtDTO dto) {
        DeclaracaoEfetivo declaracao = new DeclaracaoEfetivo(dto.nome, dto.matricula, dto.vinculo,
                dto.dataInicio, dto.dataFim, dto.numberPort, dto.dataPtDt, dto.dataDoe, dto.numberDoe,
                dto.cargo, dto.posse);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        document.add(new Paragraph(declaracao.toString()));

        document.close();
        return baos.toByteArray();
    }

    public byte[] gerarDeclaracaoEfetivoDt(DeclaracaoEfetivoPtDTO dto) {
        DeclaracaoEfetivo declaracao = new DeclaracaoEfetivo(dto.nome, dto.matricula, dto.vinculo,
                dto.dataInicio, dto.dataFim, dto.numberPort, dto.dataPtDt, dto.dataDoe, dto.numberDoe,
                dto.cargo, dto.posse);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        document.add(new Paragraph(declaracao.toString()));

        document.close();
        return baos.toByteArray();
    }
}


