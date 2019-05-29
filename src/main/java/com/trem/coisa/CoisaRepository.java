package com.trem.coisa;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoisaRepository extends CrudRepository<Coisa, Integer> {

}
