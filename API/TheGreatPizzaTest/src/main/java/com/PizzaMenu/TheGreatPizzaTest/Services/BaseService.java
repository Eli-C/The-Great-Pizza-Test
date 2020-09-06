package com.PizzaMenu.TheGreatPizzaTest.Services;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;



public class BaseService <T extends CrudRepository<K, Integer>,K>{

	@Autowired
    private T repository;

    public Iterable<K> getAll() {
        return repository.findAll();
    }

    public K getById(Integer id) throws EntityNotFoundException {
        return (K) repository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public void add(K entity) {
    	repository.save(entity);
    }

    public void update(Integer id, K entity) {
    	repository.save(entity);
    }

    public void deleteBook(Integer id) {
    	repository.deleteById(id);
    }
}
