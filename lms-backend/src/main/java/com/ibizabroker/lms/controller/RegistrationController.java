package com.ibizabroker.lms.controller;

import com.ibizabroker.lms.dao.UsersRepository;
import com.ibizabroker.lms.entity.Role;
import com.ibizabroker.lms.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/register")
public class RegistrationController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // POST 方法，用于注册用户
    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody Users user) {
        // 检查用户名是否已存在
        if (usersRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists!");
        }

        // 对密码加密
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // 默认角色为 "User"
        Role defaultRole = new Role();
        defaultRole.setRoleName("User");
        user.setRole(Collections.singleton(defaultRole));

        // 保存用户
        usersRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }
}
