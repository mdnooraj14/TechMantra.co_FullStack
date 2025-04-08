package com.techmantra.service;

import com.techmantra.model.Registration;
import com.techmantra.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    // Save user registration
    public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    // Get all registered users
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    // Find user by email
    public Optional<Registration> getRegistrationByEmail(String email) {
        return registrationRepository.findByEmail(email);
    }
}
