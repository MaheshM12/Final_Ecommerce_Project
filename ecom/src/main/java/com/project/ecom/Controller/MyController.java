package com.project.ecom.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.project.ecom.Model.Signup;
import com.project.ecom.Model.User;
import com.project.ecom.service.Services;

@Controller
public class MyController {
   @Autowired
   Services ser;

   @GetMapping("/")
   public String home() {
      return "index";
   }

   @GetMapping("/showsignup")
   public String showsignup() {
      return "Sign_up";
   }

   @PostMapping("/signup")
   public String signup(@ModelAttribute Signup use, Model model) {
      model.addAttribute("username", use.getUsername());
      model.addAttribute("password", use.getPassword());
      model.addAttribute("email", use.getEmail());
      if (use.getPassword().equals(use.getCpassword())) {
         ser.Addsignup(use);
         return "redirect:/";
      }
      return "redirect:/showsignup";
   }

   // to get the login page
   @GetMapping("/showlogin")
   public String showlogin() {
      return "login";
   }

   @GetMapping("/validate")
   public String wrongPass() {
      return "loginwrong";
     }

   // post the login data
   @PostMapping("/loginP")
   public String loginp(@ModelAttribute User user, Model model) {
      model.addAttribute("username", user.getUsername());
      model.addAttribute("password", user.getPassword());
      ser.Add(user);
      List<Signup> userD = ser.userDetail();

      for (Signup x : userD) {
         if (x.getPassword().equals(user.getPassword()) && x.getUsername().equalsIgnoreCase(user.getUsername())) {
            return "redirect:/";
         } else {
            return "redirect:/validate";
         }
      }
      return "redirect:/showsignup";
    }
}
