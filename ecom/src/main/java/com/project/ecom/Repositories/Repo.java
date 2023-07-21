package com.project.ecom.Repositories;
import com.project.ecom.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface Repo extends JpaRepository<User,Integer> {
   
}

