// src/main/java/com/teamx/shopping/dto/ProductDTO.java
package com.teamx.shopping.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stockQuantity;
}