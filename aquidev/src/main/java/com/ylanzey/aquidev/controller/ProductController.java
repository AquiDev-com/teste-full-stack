package com.ylanzey.aquidev.controller;

import com.ylanzey.aquidev.dto.ProductDto;
import com.ylanzey.aquidev.services.ProductServices;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductServices productServices;

    @Autowired
    public ProductController(ProductServices productServices) {
        this.productServices = productServices;
    }

    @PostMapping
    public ResponseEntity<Object> createProducts(@RequestBody @Valid ProductDto productDto) {

        var product = new com.ylanzey.aquidev.domain.entity.Product();
        BeanUtils.copyProperties(productDto, product);

        return ResponseEntity.status(HttpStatus.CREATED).body(productServices.save(product));
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getProductsById(@PathVariable("id") UUID id, ProductDto productDto) {

        var product = new com.ylanzey.aquidev.domain.entity.Product();
        BeanUtils.copyProperties(productDto, product);

        if (productServices.findById(id).isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(productServices.findById(id));
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @GetMapping
    public ResponseEntity<Object> getAllProducts(@PageableDefault(size = 5) Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(productServices.findAll(pageable));
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> updateProducts(@PathVariable("id") UUID id, @RequestBody @Valid ProductDto productDto) {
        var product = new com.ylanzey.aquidev.domain.entity.Product();
        BeanUtils.copyProperties(productDto, product);

        if (productServices.findById(id).isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(productServices.update(id, productDto));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteProducts(@PathVariable("id") UUID id) {

        if (productServices.findById(id).isPresent()) {
            productServices.delete(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

}