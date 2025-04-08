package com.techmantra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "registrations")
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fullname", nullable = false)
    private String fullName;

    private String email;
    private String course;

    // Constructors
    public Registration() {}

    public Registration(String fullName, String email, String course) {
        this.fullName = fullName;
        this.email = email;
        this.course = course;
    }

    // Getters & Setters
    public Long getId() { 
        return id; 
    }
    
    public void setId(Long id) { 
        this.id = id; 
    }

    public String getFullName() { 
        return fullName; 
    }
    
    public void setFullName(String fullName) { 
        this.fullName = fullName; 
    }

    public String getEmail() { 
        return email; 
    }
    
    public void setEmail(String email) { 
        this.email = email; 
    }

    public String getCourse() { 
        return course; 
    }
    
    public void setCourse(String course) { 
        this.course = course; 
    }
}
