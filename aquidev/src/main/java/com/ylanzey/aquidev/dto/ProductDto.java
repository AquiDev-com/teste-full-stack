package com.ylanzey.aquidev.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProductDto {

    @NotBlank
    private String name;

    @NotBlank
    @Min(0)
    private BigDecimal price;

    @NotBlank
    private String brand;

    @NotBlank
    @NotNull
    private String description;

    @NotBlank
    @Min(0)
    private int stock;
}