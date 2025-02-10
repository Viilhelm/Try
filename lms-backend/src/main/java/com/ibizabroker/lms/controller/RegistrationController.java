package com.ibizabroker.lms.controller;

import com.ibizabroker.lms.dao.UsersRepository;
import com.ibizabroker.lms.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/register")  // 新的注册接口，公开访问
public class RegistrationController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody Users user) {
        // 可选：检查用户名是否已存在（需在 UsersRepository 中定义 existsByUsername 方法）
        if(usersRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("用户名已存在！");
        }
        
        // 对密码进行加密
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        // 可选：设置默认角色，比如 ROLE_USER。注意，你需要在用户实体或业务逻辑中明确角色管理
        // user.setRole(...);

        // 保存用户信息
        usersRepository.save(user);
        return ResponseEntity.ok(user);
    }
}