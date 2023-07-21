package com.project.ecom.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.ecom.Model.Signup;

@Repository
public interface Repo2 extends JpaRepository<Signup,Integer>{
    
}
