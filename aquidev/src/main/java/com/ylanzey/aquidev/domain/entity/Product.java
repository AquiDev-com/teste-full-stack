package com.ylanzey.aquidev.domain.entity;

import com.ylanzey.aquidev.dto.ProductDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;


@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id  @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(length = 80,
            nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false, length = 50)
    private String brand;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private int stock;

}
