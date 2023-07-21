package com.project.ecom.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Signup")
public class Signup {

 @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id; 
 private String username ;
 private String email;
 private String password;
 private String cpassword;
public String getCpassword() {
    return cpassword;
}
public void setCpassword(String cpassword) {
    this.cpassword = cpassword;
}
public int getId() {
    return id;
}
public void setId(int id) {
    this.id = id;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
@Override
public String toString() {
    return "Signup [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + "]";
}


}
