package com.simple.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simple.dsmovie.entities.Score;
import com.simple.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
