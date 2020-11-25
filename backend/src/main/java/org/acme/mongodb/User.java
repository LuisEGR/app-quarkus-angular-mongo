package org.acme.mongodb;

import java.util.Objects;
import java.util.UUID;

public class User {

    private String firstName;
    private String lastName;
    private String email;
    private String id;

    public User() {
    }

    public User(String firstName, String email) {
        this.firstName = firstName;
        this.email = email;
        this.id =  UUID.randomUUID().toString();
    }

    public String generateId(){
        return UUID.randomUUID().toString();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof User)) {
            return false;
        }

        User other = (User) obj;

        return Objects.equals(other.id, this.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.firstName);
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}