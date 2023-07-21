package com.project.ecom.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ecom.Model.Signup;
import com.project.ecom.Model.User;
import com.project.ecom.Repositories.Repo;
import com.project.ecom.Repositories.Repo2;
@Service
public class Services {

    @Autowired
    Repo rep;
    public void Add(User user) {
        rep.save(user);
    }
      @Autowired
    Repo2 repo;
     public void Addsignup(Signup use) {
        repo.save(use);
    }
    public List<Signup> userDetail(){
    return repo.findAll();
    }
}
