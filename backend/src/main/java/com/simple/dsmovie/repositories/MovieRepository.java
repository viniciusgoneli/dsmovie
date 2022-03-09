package com.simple.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simple.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
