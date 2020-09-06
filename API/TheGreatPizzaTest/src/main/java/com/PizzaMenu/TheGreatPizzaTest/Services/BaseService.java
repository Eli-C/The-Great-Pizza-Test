package com.PizzaMenu.TheGreatPizzaTest.Services;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;



public class BaseService <T extends CrudRepository<K, Integer>,K>{

	@Autowired
    protected T repository;

    public Iterable<K> getAll() {
        return repository.findAll();
    }

    public K getById(Integer id) throws EntityNotFoundException {
        return (K) repository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public K add(K entity) {
    	return repository.save(entity);
    }

    public K update(Integer id, K entity) {
    	return repository.save(entity);
    }

    public void delete(Integer id) {
    	repository.deleteById(id);
    }
}
