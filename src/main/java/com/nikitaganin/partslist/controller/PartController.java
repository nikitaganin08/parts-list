package com.nikitaganin.partslist.controller;

import com.nikitaganin.partslist.model.Part;
import com.nikitaganin.partslist.repo.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PartController {

    @Autowired
    PartRepository repository;


    @GetMapping("/parts")
    public List<Part> getAllParts() {
        List<Part> parts = new ArrayList<>();
        repository.findAll().forEach(parts::add);
        return parts;
    }

    @GetMapping(value = "/parts/{id}")
    public Part getPart(@PathVariable("id") Long id) {
        return repository.findById(id).orElseThrow(() -> new NoSuchElementException());
    }

    @PostMapping(value = "/parts/create")
    public Part postPart(@RequestBody Part part) {
        Part newPart = repository.save(new Part(part.getName(), part.getQuantity(), part.isNecessity()));
        return newPart;
    }

    @DeleteMapping(value = "parts/{id}")
    public ResponseEntity<String> deletePart(@PathVariable("id") long id) {
        repository.deleteById(id);
        return new ResponseEntity<>("Part was deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "/parts/name/{name}")
    public Part findByName(@PathVariable String name) {
        Part part = repository.findByName(name);
        return part;
    }

    @GetMapping(value = "/parts/required/{necessity}")
    public List<Part> findByNecessity(@PathVariable boolean necessity) {
        List<Part> parts = new ArrayList<>();
        repository.findByNecessity(necessity).forEach(parts::add);
        return parts;
    }

    @GetMapping(value = "/parts/min")
    public int findMinNecessity() {
        List<Part> parts = new ArrayList<>();
        findByNecessity(true).forEach(parts::add);
        return parts.stream().min(Comparator.comparing(Part::getQuantity)).get().getQuantity();
    }

    @PutMapping("/parts/{id}")
    public ResponseEntity<Part> updatePart(@PathVariable("id") long id, @RequestBody Part part) {

        Optional<Part> newPartData = repository.findById(id);

        if(newPartData.isPresent()) {
            Part newPart = newPartData.get();
            newPart.setName(part.getName());
            newPart.setNecessity(part.isNecessity());
            newPart.setQuantity(part.getQuantity());
            return new ResponseEntity<>(repository.save(newPart), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
