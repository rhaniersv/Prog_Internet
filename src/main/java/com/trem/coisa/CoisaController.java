package com.trem.coisa;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/coisa")
public class CoisaController {

    @Autowired
    private CoisaRepository coisaRepository;

    @GetMapping("/list")
    public List<Coisa> list(){
        List<Coisa> result = new ArrayList<>();
        coisaRepository.findAll().forEach(result::add);
        return result;
    }

    @PostMapping("/save")
    public ResponseEntity<RespostaDTO> save(@RequestBody CoisaDTO dto) {
        Coisa coisa = coisaRepository.save(dto.transformaEmObjeto());
        return new ResponseEntity<>(RespostaDTO.transformaEmDTO(coisa), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id")Integer id){
        coisaRepository.deleteById(id);
    }
}
