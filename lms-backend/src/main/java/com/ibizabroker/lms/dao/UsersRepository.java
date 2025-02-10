package com.ibizabroker.lms.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibizabroker.lms.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByUsername(String username);
    boolean existsByUsername(String username);
}
