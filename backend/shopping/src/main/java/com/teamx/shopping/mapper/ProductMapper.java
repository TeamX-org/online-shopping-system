// src/main/java/com/teamx/shopping/mapper/ProductMapper.java
package com.teamx.shopping.mapper;

import org.springframework.stereotype.Component;
import com.teamx.shopping.dto.ProductDTO;
import com.teamx.shopping.dto.CreateProductRequest;
import com.teamx.shopping.entity.Product;

@Component
public class ProductMapper {
    public ProductDTO toDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setStockQuantity(product.getStockQuantity());
        return dto;
    }
    
    public Product toEntity(CreateProductRequest request) {
        Product product = new Product();
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setPrice(request.getPrice());
        product.setStockQuantity(request.getStockQuantity());
        return product;
    }
}