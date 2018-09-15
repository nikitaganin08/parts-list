package com.nikitaganin.partslist.repo;

import com.nikitaganin.partslist.model.Part;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PartRepository extends CrudRepository<Part, Long> {
    Part findByName(String name);
    List<Part> findByNecessity(boolean necessity);
}
