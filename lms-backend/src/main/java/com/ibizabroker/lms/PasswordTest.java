package com.ibizabroker.lms;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "admin-password"; // 明文密码
        String encodedPassword = "$2a$10$wzD1H6O5ZsK9CzwJ9OxsPON1mEfJzCxeLRKxYmeH1bw4FYOpQsZGC"; // 数据库中的加密密码

        boolean matches = encoder.matches(rawPassword, encodedPassword);
        System.out.println("Password matches: " + matches);
    }
}
