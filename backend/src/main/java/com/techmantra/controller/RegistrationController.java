package com.techmantra.controller;

import com.techmantra.model.Registration;
import com.techmantra.service.RegistrationService;
import com.techmantra.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class RegistrationController {

    private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private EmailService emailService;

    // Register a new user
    @PostMapping
    public ResponseEntity<Registration> registerUser(@RequestBody Registration registration) {
        logger.info("Received registration request for: " + registration.getEmail());

        Registration savedRegistration = registrationService.saveRegistration(registration);
        
        // ✅ Using `getFullName()` since your frontend & model use `fullName`
        String subject = "Registration Successful - TechMantra";
        String body = "Dear " + registration.getFullName() + ",\n\n"
                    + "Thank you for registering for the " + registration.getCourse() + " course.\n"
                    + "We will reach out with more details soon.\n\n"
                    + "Best Regards,\nTechMantra Team";

        try {
            emailService.sendEmail(registration.getEmail(), subject, body);
            logger.info("Email sent successfully to " + registration.getEmail());
        } catch (Exception e) {
            logger.error("Error sending email to " + registration.getEmail(), e);
        }

        return ResponseEntity.ok(savedRegistration);
    }

    // Get all registered users
    @GetMapping
    public ResponseEntity<List<Registration>> getAllRegistrations() {
        return ResponseEntity.ok(registrationService.getAllRegistrations());
    }

    // Find a user by email
    @GetMapping("/{email}")
    public ResponseEntity<Optional<Registration>> getUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(registrationService.getRegistrationByEmail(email));
    }
}
