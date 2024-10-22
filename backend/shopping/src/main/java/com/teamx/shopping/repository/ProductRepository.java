// src/main/java/com/teamx/shopping/repository/ProductRepository.java
package com.teamx.shopping.repository;

import com.teamx.shopping.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByName(String name);
}