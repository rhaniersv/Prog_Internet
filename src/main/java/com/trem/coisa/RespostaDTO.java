package com.trem.coisa;

public class RespostaDTO {

    public RespostaDTO(Integer id, String nome, String tipo) {
    }

    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getTipo() {
        return tipo;
    }

    private Integer id;
    private String nome;
    private String tipo;

    public static RespostaDTO transformaEmDTO(Coisa coisa){
        return new RespostaDTO(coisa.getId(), coisa.getNome(), coisa.getTipo());
    }
}
