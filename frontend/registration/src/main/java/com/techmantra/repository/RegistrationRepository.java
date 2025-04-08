package com.techmantra.repository;

import com.techmantra.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    
    // Custom method to find a registration by email
    Optional<Registration> findByEmail(String email);
}
